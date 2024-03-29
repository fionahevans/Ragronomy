Ragronomy:  R package containing functions for agronomic scenario modelling 
====================================================

## Models:

* **Ndecide**: exponential reponse curve for predicting response of crop yield and (optionally) net return to nitrogen application rate, parameterised by:
  * yield potential
  * starting nitrogen in soil
  * efficiency coefficient for soil nitrogen
  * efficiency coefficient for applied nitrogen
  * (optional) crop price
  * (optional) nitrogen cost
  
* **Pdecide**: exponential reponse curve for predicting response of crop yield and (optionally) net return to phosphorus application rate, parameterised by:
  * yield potential
  * starting phosphorus in soil
  * efficiency coefficient for soil phosphorus
  * efficiency coefficient for applied phosphorus
  * (optional) crop price
  * (optional) phosphorus cost
  
* **NPdecide**: combined Ndecide and Pdecide models, assuming no NP interaction. The NPdecide model is described in detail in Robertson, M. J., Lyle, G and Bowden J. W. (2008), ' Within-field variability of wheat yield and economic implications for spatially variable nutrient management', Field Crops Research, Vol 105(3), pp 211-220.

* **Select Your Nitrogen (SYN)**: a weekly time-step simulation model for predicting response of crop yield and net return to nitrogen applications, taking into account:
  * paddock history and estimated residual organic nitrogen in the soil
  * timing and type of up to three nitrogen fertiliser applications
  * leaching of nitrogen due to rainfall and the movement of due to downward movement of the wetting front
  * soil type
  * amount of organic carbon in the soil
  * crop type, crop price and yield potential 
 
 
Documentation for the original NPdecide too is provided as part of this package: https://github.com/fionahevans/Ragronomy/blob/master/inst/doc/NPDECIDE%20-%20Users%20Manual.pdf.

This package uses a Javascript version of Select Your Nitrogen (SYN) that is linked to R using the V8 package, see: https://cran.r-project.org/web/packages/V8/vignettes/v8_intro.html. The Javascript code was created using the original spreadsheet version of the model, available from the Western Australian Department of Primary Industries and Regional Development, https://www.agric.wa.gov.au/soils/soils-decision-support-tools. The only documentation for the model and spreadsheet tool is in the form of the Users Manual, provided as part of this package: https://github.com/fionahevans/Ragronomy/blob/master/inst/doc/Select%20Your%20Nitrogen%20Users%20Manual.pdf.
