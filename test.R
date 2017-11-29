

Nrate <- seq(from=0, to=200, by=20) 
Nyield <- rep(NA, length(Nrate))
for (i in 1:length(Nrate)) {
  Nyield[i] <- NPdecide(Nrate[i], 150, Ypot=3000)$yield
}

Prate <- seq(from=0, to=30, by=2) 
Pyield <- rep(NA, length(Prate))
for (i in 1:length(Prate)) {
  Pyield[i] <- NPdecide(500, Prate[i], Ypot=3000)$yield
}
 
par(mfrow=c(1,2)) 
plot(Nrate, Nyield, type="b", main="Yield response to N (P non-limiting)", xlab="Yield (kg/ha)") 
plot(Prate, Pyield, type="b", main="Yield response to P (N non-limiting)", xlab="Yield (kg/ha)") 


Ndecide <- function(Nrate,    
                    Ypot,    
                    CstN=0.05,     
                    CfertN=0.03,   
                    Nst=30,      
                    Area=NULL,     
                    P_y=NULL,      
                    P_nfert=NULL){ 
  
  yield <- Ypot*(1-exp(-CfertP*Prate-CstP*Pst))*(1-exp(-CfertN*Nrate-CstN*Nst))
  
  test <-  is.null(Area) || is.null(P_y) || is.null(P_nfert) 
  cost <- ifelse(test, NA, Area*Nrate*P_nfert)
  net <- ifelse(test, NA, yield *P_y*Area - (Area*Nrate*P_nfert))
  
  list(yield=yield, net.return=net)
}


Ypot <- 2500
Nst <- 10
Area <- 1
P_y <- 0.247
P_nfert <- 1.2
Prate <- 150
CstP <- 0.12
CfertP <- 0.06
CstN <- 0.05
CfertN <- 0.04
Pst <- 20
P_pfert <- 0

Nrate <- seq(from=0, to=200, by=10) 
Nyield <- rep(NA, length(Nrate))
Nreturn <- rep(NA, length(Nrate))
for (i in 1:length(Nrate)) {
  #np <- NPdecide(Nrate[i], 10, Ypot=2500, Nst=10, Area=1, P_y=2.47, P_nfert=12, P_pfert=25)
  np <- Ndecide(Nrate[i], Ypot=Ypot, Nst=Nst, Area=Area, P_y=P_y, P_nfert=P_nfert)
  Nyield[i] <- np$yield
  Nreturn[i] <- np$net.return
}


par(mar=c(5, 4, 4, 4) + 0.3) 
plot(Nrate, Nyield, type="l", main="", ylab="Yield (kg/ha)", xlab="Nitrogen rate (kg/ha)")
par(new=TRUE)
plot(Nrate, Nreturn, type = "l", col=2, axes = FALSE, bty = "n", xlab = "", ylab = "")
axis(side=4, at = pretty(range(Nreturn)))
mtext("Net return ($/ha)", side=4, line=3, col="red")


yfunc <- function(Nrate) {
  Ypot*(1-exp(-CfertP*Prate-CstP*Pst))*(1-exp(-CfertN*Nrate-CstN*Nst))*P_y*Area - 
    (Area*Nrate*P_nfert)  # objective function
}  

op <- optim(90, yfunc, method="Brent", lower=0, upper=200, control=list(fnscale=-1))

abline(v=op$par, col="red", lty=4)




Nrate <- seq(from=0, to=200, by=10) 
Ypot <- seq(from=500, to=3000, by=100)
Nyield <- array(dim=c(length(Nrate), length(Ypot)))
Nreturn <- array(dim=c(length(Nrate), length(Ypot)))
for (i in 1:length(Nrate)) {
  for (j in 1:length(Ypot)) {
    np <- Ndecide(Nrate[i], Ypot=Ypot[j], Nst=Nst, Area=Area, P_y=P_y, P_nfert=P_nfert)
    Nyield[i,j] <- np$yield
    Nreturn[i,j] <- np$net.return
  }
}

contour(Nreturn, x=Nrate, y=Ypot, xlab="Nitrogen rate (kg/ha)", ylab="Potential yield (kg/ha)")

op <- rep(NA, length(Ypot))
for (j in 1:length(Ypot)) {
  yfunc <- function(Nrate) {
    Ypot[j]*(1-exp(-CfertP*Prate-CstP*Pst))*(1-exp(-CfertN*Nrate-CstN*Nst))*P_y*Area - 
      (Area*Nrate*P_nfert)  # objective function
  }
  op[j] <- optim(90, yfunc, control=list(fnscale=-1))$par
}

lines(op, Ypot, lwd=2, col="red")

library(mc2d)
Nrisk <- function(Nrate,    
                  Ypot_mode=2500, 
                  Ypot_max=4000,
                  Price_mode=1.2, 
                  Price_max=2,
                  CstN=0.05,     
                  CfertN=0.03,   
                  Nst=30,      
                  Area=1,     
                  P_nfert=1.2){ 
  n1 <- 50000
  Ypot <- rpert(n1, 0, Ypot_mode, Ypot_max, shape=6)
  P_y <- rpert(n1, 0, Price_mode, Price_max, shape=6)
  
  yield <- Ypot*(1-exp(-CfertP*Prate-CstP*Pst))*(1-exp(-CfertN*Nrate-CstN*Nst))
  
  
  net <- yield*P_y*Area - (Area*Nrate*P_nfert) # PDF of net return for each rate
  
  list(yield=yield, net.return=net)
}

ret <- Nrisk(100, 2500, 4000, P_nfert, 2)

yfunc <- function(Nrate) {
  median(Nrisk(Nrate)$net.return)  # objective function
}  

optim(90, yfunc, method="Brent", lower=0, upper=200, control=list(fnscale=-1))$par
