/*
  FILE app.js
  @date 2022-06-27
*/




"use strict";
console.log('app js file is connected');



// The header row and footer row are each created in their own stand-alone function

// build a single table of data instead. 
// complete each row with a “Daily Location Total”.
// Each cookie stand location should have a separate render()
// method that creates and appends its row to the table
// NOTE: Please use a header cell for both the header row ( containing store hours ),
// and the footer row ( hourly and grand totals across all stores ).


// Global variables** 
CookieStore.storeSites = [];
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function CookieStore(minCustomers, maxCustomers, averageSales,locationName){
this.minCustomers = minCustomers;
this.maxCustomers = maxCustomers;
this.averageSales = averageSales;
this.locationName = locationName;
this.cookiesSold = [];
//Run our cookies-per-hour
this.numOfCookiesPerHour();
//Add the new store to our "catalog array"
CookieStore.storeSites.push(this);
}


let seattle = new CookieStore(23,65,6.3,"Seattle");
let tokyo = new CookieStore(3, 24,1.2,"Tokyo");
let dubai = new CookieStore( 11, 38,3.7,"Dubai");
let paris = new CookieStore( 20, 38,2.3,"Paris");
let lima = new CookieStore(  2, 16,4.6,"Lima");
  
  



/**
 * Derive an age in months as a random number. Get mimimum and maximum customers 
 *
 * @param {number } min - the minimum number of customers
 * @param {number} max - the maximum number of customers
 * @returns {number} - the random number of customers
 */
function getRandomCustomersPerHour(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


