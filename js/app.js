/*
  FILE app.js
  @date 2022-06-27
*/
"use strict";
console.log('app js file is connected');
// Global variables** 
let storeSites = [];

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// let lastsiteIndex = 0;


let seattle = {
  name: "Seattle",
  imageName: "seattle.jpeg",
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookiesPerSale: 6.3,
  cookiesPerHour: [],
  customersPerHour: [],
  totalDailyCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(getRandomCustomersPerHour(this.minimumCustomers, this.maximumCustomers));
    }
  },
  getCookiesPerHour: function () {
    this.getCustPerHour();
    for (let i = 0; i < storeHours.length; i++) {
      let cookPerHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerSale);
      this.cookiesPerHour.push(cookPerHour);
      this.totalDailyCookies = this.totalDailyCookies + cookPerHour;
    }
  },
  render: function () {
    this.getCookiesPerHour();
    //this is the ul
    let unorderedList = document.getElementById('seattle');
    console.log(unorderedList);
    //   //now that we have a ul lets create some li's
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      unorderedList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'Total Cookies: ' + this.totalDailyCookies;
    unorderedList.appendChild(listTotal);
  }
};

seattle.render();
console.log(seattle);


let tokyo = {
  name: "Tokyo",
  imageName: "tokyo.jpeg",
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookiesPerSale: 1.2,
  cookiesPerHour: [],
  customersPerHour: [],
  totalDailyCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(getRandomCustomersPerHour(this.minimumCustomers, this.maximumCustomers));
    }
  },
  getCookiesPerHour: function () {
    this.getCustPerHour();
    for (let i = 0; i < storeHours.length; i++) {
      let cookPerHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerSale);
      this.cookiesPerHour.push(cookPerHour);
      this.totalDailyCookies = this.totalDailyCookies + cookPerHour;
    }
  },
  render: function () {
    this.getCookiesPerHour();
    //this is the ul
    let unorderedList = document.getElementById('tokyo');
    console.log(unorderedList);
    //   //now that we have a ul lets create some li's
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      unorderedList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'Total Cookies: ' + this.totalDailyCookies;
    unorderedList.appendChild(listTotal);
  }
};

tokyo.render();


console.log(tokyo);

let dubai = {
  name: "Dubai",
  imageName: "Dubai.jpeg",
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookiesPerSale: 3.7,
  cookiesPerHour: [],
  customersPerHour: [],
  totalDailyCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(getRandomCustomersPerHour(this.minimumCustomers, this.maximumCustomers));
    }
  },
  getCookiesPerHour: function () {
    this.getCustPerHour();
    for (let i = 0; i < storeHours.length; i++) {
      let cookPerHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerSale);
      this.cookiesPerHour.push(cookPerHour);
      this.totalDailyCookies = this.totalDailyCookies + cookPerHour;
    }
  },
  render: function () {
    this.getCookiesPerHour();
    //this is the ul
    let unorderedList = document.getElementById('dubai');
    console.log(unorderedList);
    //   //now that we have a ul lets create some li's
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      unorderedList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'Total Cookies: ' + this.totalDailyCookies;
    unorderedList.appendChild(listTotal);
  }
};

dubai.render();

console.log(dubai);


let paris = {
  name: "Paris",
  imageName: "Paris.jpeg",
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookiesPerSale: 2.3,
  cookiesPerHour: [],
  customersPerHour: [],
  totalDailyCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(getRandomCustomersPerHour(this.minimumCustomers, this.maximumCustomers));
    }
  },
  getCookiesPerHour: function () {
    this.getCustPerHour();
    for (let i = 0; i < storeHours.length; i++) {
      let cookPerHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerSale);
      this.cookiesPerHour.push(cookPerHour);
      this.totalDailyCookies = this.totalDailyCookies + cookPerHour;
    }
  },
  render: function () {
    this.getCookiesPerHour();
    //this is the ul
    let unorderedList = document.getElementById('paris');
    console.log(unorderedList);
    //   //now that we have a ul lets create some li's
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      unorderedList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'Total Cookies: ' + this.totalDailyCookies;
    unorderedList.appendChild(listTotal);
  }
};

paris.render();

console.log(paris);

let lima = {
  name: "Lima",
  imageName: "Lima.jpeg",
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookiesPerSale: 4.6,
  cookiesPerHour: [],
  customersPerHour: [],
  totalDailyCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customersPerHour.push(getRandomCustomersPerHour(this.minimumCustomers, this.maximumCustomers));
    }
  },
  getCookiesPerHour: function () {
    this.getCustPerHour();
    for (let i = 0; i < storeHours.length; i++) {
      let cookPerHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerSale);
      this.cookiesPerHour.push(cookPerHour);
      this.totalDailyCookies = this.totalDailyCookies + cookPerHour;
    }
  },
  render: function () {
    this.getCookiesPerHour();
    //this is the ul
    let unorderedList = document.getElementById('lima');
    console.log(unorderedList);
    //   //now that we have a ul lets create some li's
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = storeHours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      unorderedList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'Total Cookies: ' + this.totalDailyCookies;
    unorderedList.appendChild(listTotal);
  }
};

lima.render();

console.log(lima);


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


