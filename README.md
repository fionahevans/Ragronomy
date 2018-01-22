Ragronomy:  R package containing functions for agronomic scenario modelling 
====================================================

Models:
* Ndecide: exponential reponse curve for predicting response of crop yield and (optionally) net return to nitrogen applications, parameterised by:
  * yield potential
  * starting nitrogen in soil
  * efficiency coefficient for soil nitrogen
  * efficiency coefficient for applied nitrogen
  * (optional) crop price
  * (optional) nitrogen cost
  
* Pdecide: exponential reponse curve for predicting response of crop yield and (optionally) net return to phosphorus applications, parameterised by:
  * yield potential
  * starting phosphorus in soil
  * efficiency coefficient for soil phosphorus
  * efficiency coefficient for applied phosphorus
  * (optional) crop price
  * (optional) phosphorus cost
  
* NPdecide: combined Ndecide and Pdecide models, assuming no NP interaction. The NPdecide model is described in detail in Robertson, M. J., Lyle, G and Bowden J. W. (2008), ' Within-field variability of wheat yield and economic implications for spatially variable nutrient management', Field Crops Research Vol 105(3), pp211-220.

* Select Your Nitrogen (SYN): a weekly time-step simulation model for predicting response of crop yield and net return to nitrogen applications, taking into account:
  * paddock history and estimated residual organic nitrogen in the soil
  * timing and type of up to three nitrogen fertiliser applications
  * leaching of nitrogen due to rainfall and the movement of due to downward movement of the wetting front
  * soil type
  * amount of organic carbon in the soil
  * crop type, crop price and yield potential 
  

This package uses a Javascript version of Select Your Nitrogen (SYN) that is linked to R using the V8 package, see: https://cran.r-project.org/web/packages/V8/vignettes/v8_intro.html