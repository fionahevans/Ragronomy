






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
  fpath <- system.file("js", "syn.js", package="Ragronomy")
  ct$source(fpath)
  
  
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
#' Return names of weekly rainfall profiles provided for default use by the SYN model. 
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




#' getWeeklyRainSYN
#' 
#' Return data frame of weekly rainfall data for a specific default rainfall profile used by the SYN model. 
#' The returned data frame has two columns: 'week' specifying week numbers-14 to 15 from the date of seeding; 
#' and 'rain' specifying the leaching/infiltrating rainfall for each week. From the 'Select Your Nitrogen' user
#' guide: 
#' "This is leaching/infiltrating rainfall NOT total (gauge) rainfall, i.e. the rainfall that is
#' left to leach through the soil profile after run-off and evaporation are accounted for. Run-off
#' depends on many factors including slope of the land, microrelief, surface cover, soil
#' wettability, surface sealing and soil structure, as well as the intensity and duration of the
#' rainfall events. No guidelines for the conversion of gauge rainfall to infiltrating rain are
#' possible. It is left to the user to estimate what proportion of any rainfall has infiltrated. For
#' long term average inputs it is probably appropriate to use about 90% of gauge rainfall.
#' Subtraction of estimates of weekly pan evaporation from the gauge rainfall will
#' overestimate the losses. However, rainfall events after 8-10 weeks beyond seeding should
#' be heavily discounted, because evapotranspiration will have caused considerable drying
#' Note: Rainfall entered here only affects the availability of nitrogen. SYN is NOT a crop
#' growth simulation model and so the rainfall does NOT affect the yield. Yield can only be
#' adjusted by the user when he/she changes the potential yield parameter."

#' 
#' @author Fiona Evans
#' 
#' @param index Index of rainfall profile 
#' 
#' @export
getWeeklyRainSYN <- function(index) {
  require(V8)
  
  # Create session
  ct <- new_context()
  fpath <- system.file("js", "syn.js", package="Ragronomy")
  ct$source(fpath)
  
  ct$assign("index", index)
  
  
  # Evaluate Javascript
  ct$eval("{
         var output = rainfallProfiles[index-1];
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
  fpath <- system.file("js", "syn.js", package="Ragronomy")
  ct$source(fpath)
  
  
  # Evaluate Javascript
  ct$eval("{
         var output = fertiliserData;
         }")
  
  # Get the output
  output <- ct$get("output")
  output
}

#' getCropDataSYN
#' 
#' Return crop data used by the SYN model. This data is used to calculate price adjustments 
#' for different protein / oil percentages in the grain.
#' 
#' @author Fiona Evans
#' 
#' @export
getCropDataSYN <- function() {
  require(V8)
  
  # Create session
  ct <- new_context()
  fpath <- system.file("js", "syn.js", package="Ragronomy")
  ct$source(fpath)
  
  
  # Evaluate Javascript
  ct$eval("{
          var output = cropData;
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
addFertilisers <- function(fertilisersAdded, fertiliserData) {
  require(V8)
  
  # Create session
  ct <- new_context()
  
  fpath <- system.file("js", "syn.js", package="Ragronomy")
  ct$source(fpath)
  
  ct$assign("fertilisersAdded", fertilisersAdded)
  ct$assign("fertiliserData", fertiliserData)
  
  # Evaluate Javascript
  ct$eval("{
        JSON.stringify(fertilisersAdded);
        var output = addFertilisers(fertilisersAdded, fertiliserData);
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
  fpath <- system.file("js", "syn.js", package="Ragronomy")
  ct$source(fpath)
  
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
#' fertiliserData <- getFertiliserDataSYN()
#' cropData <- getCropDataSYN()
#' 
#' SYN(currentCrop, currentPotentialYield, currentCropBasePrice,
#'     soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, 
#'    RONcarried, fertiliserData, cropData)
#' 
#' @export
SYN <- function(currentCrop, currentPotentialYield, currentCropBasePrice,
                      soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, 
                      RONcarried, fertiliserData, cropData){
  
  require(V8)
  
  fertilisersAdded <- addFertilisers(fertilisersAdded, fertiliserData)
  
  # Create session
  ct <- new_context()
  fpath <- system.file("js", "syn.js", package="Ragronomy")
  ct$source(fpath)
  
  ct$assign("currentCrop", currentCrop)
  ct$assign("currentPotentialYield", currentPotentialYield)
  ct$assign("currentCropBasePrice", currentCropBasePrice)
  ct$assign("soil", soil)
  ct$assign("soilOrganicCarbon", soilOrganicCarbon)
  ct$assign("weeklyRain", weeklyRain)
  ct$assign("fertilisersAdded", fertilisersAdded)
  ct$assign("RONcarried", RONcarried)
  ct$assign("fertiliserData", fertiliserData)
  ct$assign("cropData", cropData)
  
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
                       soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, RONcarried, 
                       fertiliserData, cropData);
          }")
  
  # Get the output
  output <- ct$get("output")
  ton <- data.frame(name=output$TON$name, totalAvailableNitrogen=output$TON$totalAvailableNitrogen,
                    fractionNavailable=c(output$TON$aIndex, NA))
  output$TON <- ton
  output
}


#' fertiliserRateSensitivityAnalysis
#' 
#' fertiliserRateSensitivityAnalysis.
#' 
#' @author Fiona Evans
#' 
#' @param fert xx
#' 
#' @export
fertiliserRateSensitivityAnalysis <- function(fert, crop, pyield, price, soil, oc, weeklyRain, 
                                              fertilisersAdded, ron, fertiliserData, cropData, rates=seq(from=0, to=120, by=12)){
  
  sq <- rates
  data <- data.frame(rate = rep(NA, length(sq)),
                     actualYield = rep(NA, length(sq)),
                     percentProtein = rep(NA, length(sq)),
                     priceReceived = rep(NA, length(sq)),
                     netReturn= rep(NA, length(sq)))
  
  j <- which(fertilisersAdded$name == fert)
  
  for (i in 1:length(sq)){
    fertilisersAdded[j, "netRate"] = sq[i];
    ret <- SYN(crop, pyield, price, soil, oc, weeklyRain, fertilisersAdded, ron, fertiliserData, cropData)
    
    data[i, "rate"] <- sq[i]
    data[i, "actualYield"] <- ret$actualYield
    data[i, "percentProtein"] <- ret$percentProtein
    data[i, "priceReceived"] <- ret$price
    data[i, "netReturn"] <- ret$netReturn
  }
  data
}

weekAppliedSensitivityAnalysis <- function(){
  
}

yieldSensitivityAnalysis <- function(){
  
}