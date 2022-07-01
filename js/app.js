"use strict";
console.log('app js file is connected');
//debugger;

//function to build footer data
function footerHourlyStoreTotals(){
  let cookieTotal = 0;
  let tFoot = document.getElementById('tablefooter');
  //tFoot.innerHTML = '';
  let tr = document.createElement('tr');
  tFoot.appendChild(tr);


  let tdTitle = document.createElement('td');
  tdTitle.textContent = 'Totals';
  tr.appendChild(tdTitle);


  for(let i = 0; i < cookiesTotalhour.length; i++){
    let cookiesForThisHour = cookiesTotalhour[i];
    cookieTotal += cookiesTotalhour;
    let cookieHourlyTotals = document.createElement ('td');
    cookieHourlyTotals.textContent = 'CookiesForThisHour';
    tr.appendChild(cookieHourlyTotals);
  }


  let cookieTotals = document.createElement('td');
  cookieTotals.textContent = 'cookieTotal';
  tr.appendChild(cookieTotals);
}



// Global variables** 
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookiesTotalhour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];

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

CookieStore.storeSites = [];



CookieStore.prototype.numOfCookiesPerHour = function(){
  for(let i = 0; i < storeHours.length; i++){
  this.cookiesSold[i] = Math.ceil(this.getRandomCustomersPerHour() * this.averageSales);
  }
};


/**
 * Derive an age in months as a random number. Get mimimum and maximum customers 
 *
 * @param {number } min - the minimum number of customers
 * @param {number} max - the maximum number of customers
 * @returns {number} - the random number of customers
 */
CookieStore.prototype.getRandomCustomersPerHour = function() {
  return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
}

CookieStore.prototype.render = function() {
let cookieTotal = 0;
let tbody = document.getElementById("storeData");
let tr = document.createElement('tr');
tbody.appendChild(tr);
let tdLocationName = document.createElement('td');
tdLocationName.textContent = this.locationName;
tr.appendChild(tdLocationName);

for(let i = 0; i < storeHours.length; i++){
  let cookiesForThisHour = this.cookiesSold[i];
  cookiesTotalhour[i] += cookiesForThisHour;
  cookieTotal += cookiesForThisHour

  let cookieHourlyData = document.createElement('td');
  cookieHourlyData.textContent = cookiesForThisHour;
  tr.appendChild(cookieHourlyData);
}
let cookieTotals = document.createElement('td');
cookieTotals.textContent = cookieTotal;
tr.appendChild(cookieTotals);
};




CookieStore.renderAll = function(){
  for(let i = 0; i < this.storeSites.length; i++) {
   this.storeSites[i].render();
  }
  footerHourlyStoreTotals();
}

/**
 * not in a function
 */

let seattle = new CookieStore( 23,65,6.3,"Seattle");
let tokyo = new CookieStore( 3, 24,1.2,"Tokyo");
let dubai = new CookieStore( 11, 38,3.7,"Dubai");
let paris = new CookieStore( 20, 38,2.3,"Paris");
let lima = new CookieStore(  2, 16,4.6,"Lima");


CookieStore.renderAll();
  