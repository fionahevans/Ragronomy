# hi in c('very low', 'low', 'medium', 'high', 'very high')
# till in c(FALSE, TRUE)

hi <- "medium"
till <- FALSE

# cropPasture in c("legume crop", "non-legume crop", "pasture", "green manure")

paddockHistory = data.frame(matrix(0, nrow=4, ncol=7, dimnames = list(c(1:4),
                      c("year", "cropPasture", 
                       "basePrice", "yield", "legumeContent", "harvestIndex", "till" ))))

paddockHistory$year=c(2003, 2002, 2001, 2000)
paddockHistory$cropPasture = c("legume crop", "non-legume crop", "non-legume crop", "non-legume crop")
paddockHistory$basePrice=c(NA, rep(202,3)) 
paddockHistory$yield = rep(2, 4)
paddockHistory$legumeContent=NA
paddockHistory$harvestIndex=rep(hi, 4)
paddockHistory$till=rep(till,4)


# currentCrop in c( "ASW", "Premium White wheat", "Hard wheat", "Durum Premium", "Durum General",
#     "Soft wheat", "Noodle wheat", "Malting barley", "Canola (oil)")
currentCrop <- "ASW"

# currentPotentialYield is numeric (t/ha)
currentPotentialYield <- 2

# currentCropBasePrice is numeric $
currentCropBasePrice <- 202

# soil is an element of soils, use function getSoilsSYN() 
soils <- getSoilsSYN()
soil <- soils[1,]

# soilOrganicCarbon is a percentage, numeric between 0 and 100
soilOrganicCarbon <- 0.5

# weeklyRain is a rainfall profile, use getRainfallProfilesSYN
getRainfallProfilesSYN()
weeklyRain <- getWeeklyRainSYN(5)

# fertilisersAdded based on fertilisers returned by getFertiliserDataSYN
fertiliserData <- getFertiliserDataSYN()
fertiliserData <- subset(fertiliserData, name %in% c("DAP", "Urea", "nitrate"))
fertilisersAdded <- data.frame(name=c("DAP", "Urea", "nitrate"), weekApplied=c(0, 4, -14), netRate=c(15, 30, 50))


# RONcarried can be calculated from paddock history
RONcarried <- calculateRON(paddockHistory)

# cropData is used for calculating protein premiums
cropData <- getCropDataSYN()


SYN(currentCrop, currentPotentialYield , currentCropBasePrice,
                      soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, 
                      RONcarried, fertiliserData, cropData)


x <- seq(from=0, to=5, by=0.01)
y <- tanh(x)
plot(x, y)

# R tanh and Excel give the same answers, but R from v8 truncates to four decimal places.


fs <- fertiliserRateSensitivityAnalysis("Urea", currentCrop, currentPotentialYield , currentCropBasePrice,
                                              soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, 
                                              RONcarried, fertiliserData, cropData)
  
with(fs, plot(rate, actualYield, type="l")) 
  
  

