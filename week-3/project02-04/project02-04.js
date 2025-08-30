/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Aisha Keller
      Date: 08/30/2025

      Filename: project02-04.js
 */

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

// declare global constants for the application
const CHICKEN_PRICE = 10.95; //cost of chicken
const HALIBUT_PRICE = 13.95; //cost of halibut
const BURGER_PRICE = 9.95; //cost of burger
const SALMON_PRICE = 18.95; //cost of salmon
const SALAD_PRICE = 7.95; //cost of salad
const SALES_TAX = 0.07; //cost of sales tax

// Event handler that runs calcTotal function
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

// setup the form's default values
function calcTotal() {
  let cost = 0;
  const buyChicken = document.getElementById("chicken").checked;
  const buyHalibut = document.getElementById("halibut").checked;
  const buyBurger = document.getElementById("burger").checked;
  const buySalmon = document.getElementById("salmon").checked;
  const buySalad = document.getElementById("salad").checked;

// Add the cost of chicken if ordered
cost += buyChicken ? CHICKEN_PRICE : 0;

// Add the cost of halibut if ordered
cost += buyHalibut ? HALIBUT_PRICE : 0;

// Add the cost of burger if ordered
cost += buyBurger ? BURGER_PRICE: 0;

// Add the cost of salmon if ordered
cost += buySalmon ? SALMON_PRICE : 0;

// Add the cost of salad if ordered
cost += buySalad ? SALAD_PRICE : 0;

// Display the estimate value formatted as currency
document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

// Declare tax variable
const tax = cost * SALES_TAX;
document.getElementById("foodTax").innerHTML = formatCurrency(tax);

//Declare total cost variable
const totalCost = cost + tax;
document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

