
#' Optimise rates of nitrogen (N) and phosphorus (P)
#' 
#' Optimise rates of nitrogen (N) and phosphorus (P) 
#' over 3 paddocks or management zones. This function is used as the base model in an 
#' online fertiliser tool for precision agriculture that is available at http://optimiser.csiro.au
#' 
#' @param rate vector containing starting values for N rate (first 3) and then  P rate (last 3).
#'
#' @author Fiona Evans
#' 
#' @return Returns a vector of station ids, in order of increasing distance.
#' @usage NPoptim(c(90,60,0,32,23,20), yfunc3, control=list(fnscale=-1))
NPoptim <- function(rate) {
  optim(c(90,60,0,32,23,20), yfunc3, control=list(fnscale=-1))
}



yfunc3 <- function(rate) {
  Nrate <- c(rate[1],rate[2],rate[3]) # parameter to optimise (N rate)
  Prate <- c(rate[4],rate[5],rate[6]) # parameter to optimise (P rate)
  Cstp <- c(0.2,0.2,0.2) # efficiency coefficient for soil P
  CfertP <- c(0.14,0.14,0.14) # efficiency coefficient for applied P
  CstN <- c(0.02,0.02,0.02) # efficiency coefficient for soil N
  CfertN <- c(0.017,0.017,0.017) # efficiency coefficient for applied N
  Nst <- c(15,15,15)  # starting N in soil
  Pst <- c(5,5,5) # starting P in soil
  Ypot <- c(3000,2000,1000) # yield potential of each zone
  Area <- c(46.5,17.12,19.80) # area of each zone in hectares
  P_y <- c(0.3,0.3,0.3) # value of yield
  P_nfert <- c(2.2,2.2,2.2) # price of N fert
  P_pfert <- c(4.0,4.0,4.0) # price of P fert
  sum(Ypot*(1-exp(-CfertP*Prate-Cstp*Pst))*(1-exp(-CfertN*Nrate-CstN*Nst))*P_y*Area - 
        (Area*Nrate*P_nfert) - (Area*Prate*P_pfert)) # objective function
}


#' NPdecide
#' 
#' Model for predicting effect on yield of aplications rates of nitrogen (N) and 
#' phosphorus (P) in the absence of any other yield-limiting factors. 
#' 
#' @param Nrate   N rate (kg/ha)
#' @param Prate   P rate (kg/ha)
#' @param Ypot    yield potential (kg/ha)
#' @param CstP    efficiency coefficient for soil P
#' @param CfertP  efficiency coefficient for applied P
#' @param CstN    efficiency coefficient for soil N
#' @param CfertN  efficiency coefficient for applied N
#' @param Nst     starting N in soil (kg/ha)
#' @param Pst     starting P in soil (kg/ha)
#' @param Area    area sown (ha)
#' @param P_y     price paid per kg of yield ($)
#' @param P_nfert price per kg of N fertiliser ($)
#' @param P_pfert price per kg of P fertiliser ($)
#'
#' @author Fiona Evans
#' 
#' @return Returns the predicted yield and net return if Area and prices are supplied.
#' @examples 
#' # Plot response curves
#' 
#' Nrate <- seq(from=0, to=200, by=20) 
#' Nyield <- rep(NA, length(Nrate))
#' for (i in 1:length(Nrate)) {
#'   Nyield[i] <- NPdecide(Nrate[i], 150, Ypot=3000)$yield
#' }
#' 
#' Prate <- seq(from=0, to=30, by=2) 
#' Pyield <- rep(NA, length(Prate))
#' for (i in 1:length(Prate)) {
#'   Pyield[i] <- NPdecide(500, Prate[i], Ypot=3000)$yield
#' }
#' 
#' par(mfrow=c(1,2)) 
#' plot(Nrate, Nyield, type="b", main="Yield response to N (P non-limiting)", xlab="Yield (kg/ha)") 
#' plot(Prate, Pyield, type="b", main="Yield response to P (N non-limiting)", xlab="Yield (kg/ha)") 
#' 
#' @details The NPdecide model is described in detail in Robertson, M. J., Lyle, G and 
#' Bowden J. W. (2008), 
#' Within-field variability of wheat yield and economic implications for spatially variable 
#' nutrient management, Field Crops Research Vol 105(3), pp 211-220.
#' 
#' Input parameters CstP, cFertN, Cst, cfertN, Nst and Pst relate to amoutn of fertilisers already
#' available int he soil, and the responsiveness of the soil to added fertilisers. Initial values
#' have been set according to the references paper, but would normally be available from soil tests.
#' 
#' 
#' The model is also used in an online tool: http://optimiser.csiro.au/
#' 
#' @export
NPdecide <- function(Nrate,    
                     Prate,
                     Ypot,   
                     CfertN=0.03, 
                     CstN=0.05, 
                     Nst=30,  
                     CfertP=0.06,   
                     CstP=0.12, 
                     Pst=20,  
                     Area=NULL,     
                     P_y=NULL,      
                     P_nfert=NULL,  
                     P_pfert=NULL){ 
  
  yield <- Ypot*(1-exp(-CfertP*Prate-CstP*Pst))*(1-exp(-CfertN*Nrate-CstN*Nst))
  
  test <-  is.null(Area) || is.null(P_y) || is.null(P_nfert) || is.null(P_pfert)
  net <- ifelse(test, NA, yield *P_y*Area - (Area*Nrate*P_nfert) - (Area*Prate*P_pfert))
  
  list(yield=yield, net.return=net)
}

#' Ndecide
#' 
#' Model for predicting effect on yield of aplications rates of nitrogen (N) 
#' in the absence of any other yield-limiting factors. 
#' 
#' @param Nrate   N rate (kg/ha)
#' @param Ypot    yield potential (kg/ha)
#' @param CstN    efficiency coefficient for soil N
#' @param CfertN  efficiency coefficient for applied N
#' @param Nst     starting N in soil (kg/ha)
#' @param Area    area sown (ha)
#' @param P_y     price paid per kg of yield ($)
#' @param P_nfert price per kg of N fertiliser ($)
#'
#' @author Fiona Evans
#' 
#' @return Returns the predicted yield and net return if Area and prices are supplied.
#' @examples 
#' # Plot response curve
#' 
#' Nrate <- seq(from=0, to=200, by=20) 
#' Nyield <- rep(NA, length(Nrate))
#' for (i in 1:length(Nrate)) {
#'   Nyield[i] <- Ndecide(Nrate[i], Ypot=3000)$yield
#' }
#' 
#' plot(Nrate, Nyield, type="b", main="Yield response to N (P non-limiting)", xlab="Yield (kg/ha)") 
#' 
#' @details The NPdecide model is described in detail in Robertson, M. J., Lyle, G and 
#' Bowden J. W. (2008), 
#' Within-field variability of wheat yield and economic implications for spatially variable 
#' nutrient management, Field Crops Research Vol 105(3), pp 211-220.
#' 
#' Input parameters CstP, cFertN, Cst, cfertN, Nst and Pst relate to amoutn of fertilisers already
#' available int he soil, and the responsiveness of the soil to added fertilisers. Initial values
#' have been set according to the references paper, but would normally be available from soil tests.
#' 
#' 
#' The model is also used in an online tool: http://optimiser.csiro.au/
#' 
#' @export
Ndecide <- function( Nrate,    
                     Ypot,    
                     CstN=0.05,     
                     CfertN=0.03,   
                     Nst=30,      
                     Area=NULL,     
                     P_y=NULL,      
                     P_nfert=NULL){ 
  
  yield <- Ypot*(1-exp(-CfertN*Nrate-CstN*Nst))
  
  test <-  is.null(Area) || is.null(P_y) || is.null(P_nfert) 
  net <- ifelse(test, NA, yield *P_y*Area - (Area*Nrate*P_nfert))
  
  list(yield=yield, net.return=net)
}


#' Pdecide
#' 
#' Model for predicting effect on yield of aplications rates of 
#' phosphorus (P) in the absence of any other yield-limiting factors. 
#' 
#' @param Prate   P rate (kg/ha)
#' @param Ypot    yield potential (kg/ha)
#' @param CstP    efficiency coefficient for soil P
#' @param CfertP  efficiency coefficient for applied P
#' @param Pst     starting P in soil (kg/ha)
#' @param Area    area sown (ha)
#' @param P_y     price paid per kg of yield ($)
#' @param P_pfert price per kg of P fertiliser ($)
#'
#' @author Fiona Evans
#' 
#' @return Returns the predicted yield and net return if Area and prices are supplied.
#' @examples 
#' # Plot response curve
#' 
#' Prate <- seq(from=0, to=30, by=2) 
#' Pyield <- rep(NA, length(Prate))
#' for (i in 1:length(Prate)) {
#'   Pyield[i] <- Pdecide(500, Prate[i], Ypot=3000)$yield
#' }
#' 
#' plot(Prate, Pyield, type="b", main="Yield response to P (N non-limiting)", xlab="Yield (kg/ha)") 
#' 
#' @details The NPdecide model is described in detail in Robertson, M. J., Lyle, G and 
#' Bowden J. W. (2008), 
#' Within-field variability of wheat yield and economic implications for spatially variable 
#' nutrient management, Field Crops Research Vol 105(3), pp 211-220.
#' 
#' Input parameters CstP, cFertN, Cst, cfertN, Nst and Pst relate to amoutn of fertilisers already
#' available int he soil, and the responsiveness of the soil to added fertilisers. Initial values
#' have been set according to the references paper, but would normally be available from soil tests.
#' 
#' 
#' The model is also used in an online tool: http://optimiser.csiro.au/
#' 
#' @export
Pdecide <- function( Prate,
                     Ypot,    
                     CstP=0.12,     
                     CfertP=0.06,   
                     Pst=20,     
                     Area=NULL,     
                     P_y=NULL,      
                     P_pfert=NULL){ 
  
  yield <- Ypot*(1-exp(-CfertP*Prate-CstP*Pst))
  
  test <-  is.null(Area) || is.null(P_y) || is.null(P_pfert)
  net <- ifelse(test, NA, yield *P_y*Area - (Area*Prate*P_pfert))
  
  list(yield=yield, net.return=net)
}

