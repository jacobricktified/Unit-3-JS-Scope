// Write your solution in this file!
//declare customername to be in global scope
var customerName = 'bob';
// make the customer name upper case and return it
function upperCaseCustomerName() {
  //change the value of customerName to be all uppercase
  customerName = customerName.toUpperCase();
}
//declare bestCustomer in global scope and assign it to be 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}       


//change the value of bestCustomer to be 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}  
// unsuccessfully tries to reassign the least favorite customer
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}      



