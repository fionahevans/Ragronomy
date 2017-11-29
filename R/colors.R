
#' Makes colors for plotting
#' 
#' Makes colors for plotting, stretched to cover the range of x
#'
#' @param x Input data.
#' @param col Color map (default is tim.colors).
#' @param range Range of x values to limit color to (not required).
#'
#' @author Fiona Evans
#' 
#' @return Returns a vector of colors.
#' @export
color.of <- function (x, col = rainbow(100), range = NULL) 
{
  if (is.null(range)) 
    range <- range(x, na.rm = T)
  this.col <- c("#FFFFFF", col)
  n <- length(this.col)
  indx <- round(my.rescale(x, 2, n, mina = range[1], maxa = range[2]))
  indx <- replace.gt(indx, n, n)
  indx <- replace.lt(indx, 2, 2)
  indx <- na.replace(indx, 1)
  this.col[indx]
}

#' Rescale a vector.
#'
#' Linearly rescale a vector to range between minb and maxb.
#'
#' @param a Input vector.
#' @param minb .
#' @param maxb .
#' @param mina .
#' @param maxa .
#'
#' @keywords manip
#' @export
#' @examples
#' a <- c(2:8)
#' my.rescale(a, 1, 10)
#' my.rescale(a, 1, 10, minb=1, maxb=10)
my.rescale <- function(a, minb, maxb, mina=NULL, maxa=NULL) {
  if (is.null(mina)) mina <- min(a, na.rm=T)
  if (is.null(maxa)) maxa <- max(a, na.rm=T)
  minb + (maxb - minb) * (a - mina)/ (maxa - mina)
}

# Replace values in vector x that are greater than val1 with val2
replace.gt <- function (x, val1, val2) {
  x[x > val1] <- val2
  x
}

# Replace values in vector x that are less than val1 with val2  
replace.lt <- function (x, val1, val2) {
  x[x < val1] <- val2
  x
}

# Replace values in vector x that NA with val 
na.replace <- function(x, val) {
  x[is.na(x)] <- val
  x
}


#' Older version from package 'fields' (less of the middle colour present).
#' 
#' Color interpolation between three colors to output a color vector.
#'
#' @param n Length of output vector.
#' @param start Color.
#' @param end Color.
#' @param middle Color.
#'
#' @keywords color
#' @export
two.colors.old <- function (n = 256, start = "darkgreen", end = "red", middle = "white")
{
  n1 <- n/2
  n2 <- n - n1
  col2 <- col2rgb(end)
  col1 <- col2rgb(start)
  mid.col <- col2rgb(middle)
  e1 <- seq(1, 0, , n1)
  e2 <- seq(0, 1, , n2)
  temp <- rbind(e1 * matrix(col1, nrow = n1, ncol = 3, byrow = TRUE) +
                  (1 - e1) * matrix(mid.col, nrow = n1, ncol = 3, byrow = TRUE),
                e2 * matrix(col2, nrow = n1, ncol = 3, byrow = TRUE) +
                  (1 - e2) * matrix(mid.col, nrow = n1, ncol = 3, byrow = TRUE))
  temp <- temp/256
  rgb(temp[, 1], temp[, 2], temp[, 3])
}
