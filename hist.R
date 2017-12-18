library(agric)
library(agric)
library(Ragronomy)
fertilisersAdded
library(Ragronomy)
$actualYield
[1] 1.65
$percentProtein
[1] 8.6
$price
[1] 170.45
$netReturn
[1] 237
$TON
name totalAvailableNitrogen fractionNavailable
1    Soil Organic Nitrogen                     17                  2
2 Residue Organic Nitrogen                      0                  0
3                      MAP                     32                 65
4                  Flexi N                      0                  0
5                    Total                     49                 NA
hi <- "medium"
till <- FALSE
# cropPasture in c("legume crop", "non-legume crop", "pasture", "green manure")
paddockHistory = data.frame(matrix(0, nrow=4, ncol=7, dimnames = list(c(1:4),
c("year", "cropPasture",
"basePrice", "yield", "legumeContent", "harvestIndex", "till" ))))
paddockHistory$year=c(2003, 2002, 2001, 2000)
paddockHistory$cropPasture = c("non-legume crop", "non-legume crop", "non-legume crop", "non-legume crop")
paddockHistory$basePrice=c(NA, rep(202,3))
paddockHistory$yield = rep(2, 4)
paddockHistory$legumeContent=NA
paddockHistory$harvestIndex=rep(hi, 4)
paddockHistory$till=rep(till,4)
# RONcarried can be calculated from paddock history
RONcarried <- calculateRON(paddockHistory)
# currentCrop in c( "ASW", "Premium White wheat", "Hard wheat", "Durum Premium", "Durum General",
#     "Soft wheat", "Noodle wheat", "Malting barley", "Canola (oil)")
currentCrop <- "Hard wheat"
# currentCropBasePrice is numeric $
currentCropBasePrice <- 202
# soil is an element of soils, use function getSoilsSYN()
soils <- getSoilsSYN()
soil <- soils[8,]
# soilOrganicCarbon is a percentage, numeric between 0 and 100
soilOrganicCarbon <- 1
# weeklyRain is a rainfall profile, use getRainfallProfilesSYN
getRainfallProfilesSYN()
weeklyRain <- getWeeklyRainSYN(7)
# fertilisersAdded based on fertilisers returned by getFertiliserDataSYN
fertilisersAdded <- data.frame(name=c("MAP", "Flexi N"), weekApplied=c(0, 6), netRate=c(50, 0))
fertiliserRateSensitivityAnalysis("Flexi N", currentCrop, 2, currentCropBasePrice,
soil, soilOrganicCarbon, weeklyRain, fertilisersAdded,
RONcarried)
fert <- "Flexi N"
crop <- currentCrop
pyield <- 2
price <- currentCropBasePrice
soilOrganicCarbon -> oc
RONcarried -> ron
sq <- seq(from=0, to=120, by=12)
data <- data.frame(rate = rep(NA, length(sq)),
actualYield = rep(NA, length(sq)),
percentProtein = rep(NA, length(sq)),
priceReceived = rep(NA, length(sq)),
netReturn= rep(NA, length(sq)))
j <- which(fertilisersAdded$name == fert)
j
j <- which(fertilisersAdded$name == fert)
for (i in 1:length(sq)){
fertilisersAdded[j, "netRate"] = sq[i];
ret <- SYN(crop, pyield, price, soil, oc, weeklyRain, fertilisersAdded, ron)
data[i, "rate"] <- sq[i]
data[i, "actualYield"] <- ret$actualYield
data[i, "percentProtein"] <- ret$percentProtein
data[i, "priceReceived"] <- ret$prive
data[i, "netReturn"] <- ret$netReturn
}
data
for (i in 1:length(sq)){
fertilisersAdded[j, "netRate"] = sq[i];
ret <- SYN(crop, pyield, price, soil, oc, weeklyRain, fertilisersAdded, ron)
data[i, "rate"] <- sq[i]
data[i, "actualYield"] <- ret$actualYield
data[i, "percentProtein"] <- ret$percentProtein
data[i, "priceReceived"] <- ret$price
data[i, "netReturn"] <- ret$netReturn
}
data
library(Ragronomy)
history()
savehistory("C:/Fiona/Big Data/R_PACKAGES/Ragronomy/hist.R")
