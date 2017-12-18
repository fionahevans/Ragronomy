






#' getSoilsSYN
#' 
#' Return data frame of soils and associated parameters used by the SYN model. 
#' 
#' @author Fiona Evans
#' 
#' @export
getSoilsSYN <- function() {
  require(V8)
  
  # Create session
  ct <- new_context()
  ct$source("./inst/js/syn.js")
  
  
  # Evaluate Javascript
  ct$eval("{
         var output = soils;
         }")
  
  # Get the output
  output <- ct$get("output")
  output
}





#' getRainfallProfilesSYN
#' 
#' Return names of weekly rainfall profiles used by the SYN model. 
#' 
#' @author Fiona Evans
#' 
#' @export
getRainfallProfilesSYN <- function() {
  c("Default rain - leaching", 
    "Default rain - no leaching",
    "Dryland rain - leaching",
    "Dryland rain - no leaching",
    "Dryland summer rain - leaching",
    "Dryland summer rain - no leaching",
    "Summer rain - leaching",
    "Summer rain - no leaching")
}




#' getRainfallProfilesSYN
#' 
#' Return data frame of weekly rainfall profiles used by the SYN model. 
#' 
#' @author Fiona Evans
#' 
#' @param index Index of rainfall rpofile to use.
#' 
#' @export
getWeeklyRainSYN <- function(index) {
  require(V8)
  
  # Create session
  ct <- new_context()
  ct$source("./inst/js/syn.js")
  
  ct$assign("index", index)
  
  
  # Evaluate Javascript
  ct$eval("{
         var output = rainfallProfiles[index];
         }")
  
  # Get the output
  output <- ct$get("output")$data
  output
}


#' getFertiliserDataSYN
#' 
#' Return fertiliser data used by the SYN model. 
#' 
#' @author Fiona Evans
#' 
#' @export
getFertiliserDataSYN <- function() {
  require(V8)
  
  # Create session
  ct <- new_context()
  ct$source("./inst/js/syn.js")
  
  
  # Evaluate Javascript
  ct$eval("{
         var output = fertiliserData;
         }")
  
  # Get the output
  output <- ct$get("output")
  output
}




#' addFertilisers
#' 
#' Calculate fertiliser N rate and net rate.
#' 
#' @author Fiona Evans
#' 
#' @param paddockHistory   data frame containing paddock history.
#' 
#' @export
addFertilisers <- function(fertilisersAdded) {
  require(V8)
  
  # Create session
  ct <- new_context()
  ct$source("./inst/js/syn.js")
  
  ct$assign("fertilisersAdded", fertilisersAdded)
  
  # Evaluate Javascript
  ct$eval("{
        JSON.stringify(fertilisersAdded);
        var output = addFertilisers(fertilisersAdded);
        }")
  
  # Get the output
  output <- ct$get("output")
  output
}





#' calculateRON
#' 
#' calculate residual organic nitrogen (RON) estimate from paddock history.
#' 
#' @author Fiona Evans
#' 
#' @param paddockHistory   data frame containing paddock history.
#' 
#' @export
calculateRON <- function(paddockHistory) {
  require(V8)
  
  # Create session
  ct <- new_context()
  ct$source("http://momentjs.com/downloads/moment.js")
  ct$source("./inst/js/syn.js")
  
  ct$assign("paddockHistory", paddockHistory)
  
  # Evaluate Javascript
  ct$eval("{
        JSON.stringify(paddockHistory);
        var output = calculateRON(paddockHistory);
        }")
  
  # Get the output
  output <- ct$get("output")$totalRonCarried[1]
  output
}


#' SYN
#' 
#' Run the SYN model.
#' 
#' @author Fiona Evans
#' 
#' @param currentCrop  element of c( "ASW", "Premium White wheat", "Hard wheat", "Durum Premium", "Durum General",
#     "Soft wheat", "Noodle wheat", "Malting barley", "Canola (oil)").
#' @param currentPotentialYield numeric (t/ha)
#' @param currentCropBasePrice numrix ($)
#' @param soil an element of soils, use function getSoilsSYN() 
#' @param soilOrganicCarbon percentage (between 0 and 100)
#' @param weeklyRain weeklyRain is a rainfall profile, use getRainfallProfilesSYN
#' @param fertilisersAdded based on fertilisers returned by getFertiliserDataSYN, see examples for format
#' @param RONcarried numeric, can be calculated from paddock history.
#' 
#' @examples 
#' currentCrop <- "ASW"
#' 
#' currentPotentialYield <- 2
#' 
#' currentCropBasePrice <- 202
#' 
#' soils <- getSoilsSYN()
#' soil <- soils[1,]
#' 
#' soilOrganicCarbon <- 0.5
#' 
#' getRainfallProfilesSYN()
#' weeklyRain <- getWeeklyRainSYN(5)
#' 
#' fertilisersAdded <- data.frame(name=c("DAP", "Urea", "nitrate"), 
#'                                weekApplied=c(0, 4, -14), 
#'                                netRate=c(15, 30, 50))
#' 
#' RONcarried <- calculateRON(paddockHistory)
#' 
#' SYN(currentCrop, currentPotentialYield, currentCropBasePrice,
#'     soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, 
#'    RONcarried)
#' 
#' @export
SYN <- function(currentCrop, currentPotentialYield, currentCropBasePrice,
                      soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, 
                      RONcarried){
  
  require(V8)
  
  fertilisersAdded <- addFertilisers(fertilisersAdded)
  
  # Create session
  ct <- new_context()
  ct$source("http://momentjs.com/downloads/moment.js")
  ct$source("./inst/js/math.min.js")
  ct$source("./inst/js/syn.js")
  
  ct$assign("currentCrop", currentCrop)
  ct$assign("currentPotentialYield", currentPotentialYield)
  ct$assign("currentCropBasePrice", currentCropBasePrice)
  ct$assign("soil", soil)
  ct$assign("soilOrganicCarbon", soilOrganicCarbon)
  ct$assign("weeklyRain", weeklyRain)
  ct$assign("fertilisersAdded", fertilisersAdded)
  ct$assign("RONcarried", RONcarried)

  
  # Evaluate Javascript
  ct$eval("{
          JSON.stringify(currentCrop);
          JSON.stringify(currentPotentialYield);
          JSON.stringify(currentCropBasePrice);
          JSON.stringify(soil);
          JSON.stringify(soilOrganicCarbon);
          JSON.stringify(weeklyRain);
          JSON.stringify(fertilisersAdded);
          JSON.stringify(RONcarried);
          JSON.stringify(fertiliserData);
          JSON.stringify(cropData);
          var output = simpleSYN(currentCrop, currentPotentialYield, currentCropBasePrice,
                      soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, RONcarried);
          }")
  
  # Get the output
  output <- ct$get("output")
  ton <- data.frame(name=output$TON$name, totalAvailableNitrogen=output$TON$totalAvailableNitrogen,
                    fractionNavailable=c(output$TON$aIndex, NA))
  output$TON <- ton
  output
}



fertiliserRateSensitivityAnalysis <- function(){
  
}

weekAppliedSensitivityAnalysis <- function(){
  
}

yieldSensitivityAnalysis <- function(){
  
}