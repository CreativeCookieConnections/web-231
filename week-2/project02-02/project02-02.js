/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Aisha Keller
      Date: 08/22/2025

      Filename: project02-02.js
 */

function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

// Conditional operator
  (name && email && phone) ? window.alert("Thank you!") : window.alert("Please fill in all the fields.");
}

// Attach event listener to the submit element
document.getElementById("submit").addEventListener("click", verifyForm);