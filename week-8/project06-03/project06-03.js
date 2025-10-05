"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Aisha Keller
      Date: 10/05/2025

      Filename: project06-03.js
*/

// Declare the useShip variable
let useShip = document.getElementById("useShip");
let firstnameBill = "firstnameBill";
let firstnameShip = "firstnameShip";
let lastnameBill = "lastnameBill";
let lastnameShip = "lastnameShip";
let address1Bill = "address1Bill";
let address1Ship = "address1Ship";
let address2Bill = "address2Bill";
let address2Ship = "address2Ship";
let cityBill = "cityBill";
let cityShip = "cityShip";
let countryBill = "countryBill";
let countryShip = "countryShip";
let codeBill = "codeBill";
let codeShip = "codeShip";

// Add an event listener
useShip.addEventListener("click", copyShippingToBilling);

// Create the copyShippingToBilling function
function copyShippingToBilling() {
    // Check if the checkbox is checked
    if (useShip.checked) {
      // Copy shipping address to billing address
      document.getElementById(firstnameBill).value = document.getElementById(firstnameShip).value;
      document.getElementById(lastnameBill).value = document.getElementById(lastnameShip).value;
      document.getElementById(address1Bill).value = document.getElementById(address1Ship).value;
      document.getElementById(address2Bill).value = document.getElementById(address2Ship).value;
      document.getElementById(cityBill).value = document.getElementById(cityShip).value;
      document.getElementById(countryBill).value = document.getElementById(countryShip).value;
      document.getElementById(codeBill).value = document.getElementById(codeShip).value;
      // Set the selectedIndex for stateBill
      document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
    }
}

// Declare the formElements variable
let formElements = document.querySelectorAll("input[type=text], select");

// Declare the fieldCount variable
let fieldCount = formElements.length;

// Declare the errorBox variable
let errorBox = document.getElementById("errorBox");

// Creates a for loop that iterates through each element in the formElements node list
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Create the showValidationError evt function
function showValidationError(evt) {
  // Prevent native browser validation
  evt.preventDefault();
  // Show custom error message
  errorBox.textContent = "Complete all highlighted fields.";
}