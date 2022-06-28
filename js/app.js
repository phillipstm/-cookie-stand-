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
    minimumCustomers:  23,
    maximumCustomers:  65,
    averageCookiesPerSale:  6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,
    getCustPerHour: function(){
      for(let i = 0; i < storeHours.length; i++ ){
        this.customersPerHour.push(getRandomCustomersPerHour(this.minimumCustomers, this.maximumCustomers));
      }
    },
    getCookiesPerHour: function(){
      this.getCustPerHour();
      for(let i = 0; i < storeHours.length; i++){
        let cookPerHour = Math.ceil(this.customersPerHour[i] * this.averageCookiesPerSale);
        this.cookiesPerHour.push(cookPerHour);
        this.totalDailyCookies = this.totalDailyCookies + cookPerHour;
      }
    },
    render: function(){
      this.getCookiesPerHour();
      //this is the ul
      let unorderedList = document.getElementById('seattle');
      console.log(unorderedList);
    //   //now that we have a ul lets create some li's
      for(let i = 0; i < storeHours.length; i++){
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





  // let Tokyo = {
  //   name: "Tokyo",
  //   salesAverage: getRandomCustomersPerHour(3, 12), //salesAversalesAverage: getAverageCookiesSale(1,2)
  //   imageName: "Tokyo.jpeg",
  //   interests: ["cuddling", "stalking", "catnip"],
  //   isGoodWithKids: false, //mimimumCustomers: 3,
  //   isGoodWithDogs: false, //maximumCustomers: 24,
  //   isGoodWithOtherCats: true, //averageCookiesPerSale: 1.2,
  //   getsalesAverage: function () {
  //     console.log(this.name);
  //     console.log(this.salesAverage);
  //   },
  // };
  // site.push(Tokyo);

  // let Dubai = {
  //   name: "Dubai",
  //   salesAverage: getRandomCustomersPerHour(3, 12), //salesAversalesAverage: getAverageCookieSales(3,7)
  //   imageName: "Dubai.jpeg",
  //   interests: ["cuddling", "sleeping", "world domination"],
  //   isGoodWithKids: false, //minimumCustomers: 11,
  //   isGoodWithDogs: false, //maximumCustomers: 38
  //   isGoodWithOtherCats: false, //averageCookiesPerSale: 3.7,
  //   getsalesAverage: function () {
  //     console.log(this.name);
  //     console.log(this.salesAverage);
  //   },
  // };
  // site.push(Dubai);

  // let Paris = {
  //   name: "Paris",
  //   salesAverage: getRandomCustomersPerHour(2,3)
  //   imageName: "Paris.jpeg",
  //   interests: ["cuddling", "sleeping", "world domination"],
  //   minimumCustomers: 20,
  //   maximumCustomers: 38,
  //   //isGoodWithOtherCats: false, //averageCookiesPerSale: 3.7,
  //   getsalesAverage: function () {
  //     console.log(this.name);
  //     console.log(this.salesAverage);
  //   },
  // };
  // site.push(Paris);

// let Lima = {
//   name: "Lima",
//   salesAversalesAverage: getAverageCookieSales(4,6)
//   imageName : "Lima.jpeg",
//   interests: ["cuddling", "sleeping", "world domination"],
//   minimumCustomers: 2,
//   maximumCustomers : 16,
//    //isGoodWithOtherCats: false, //averageCookiesPerSale: 3.7,
//    getsalesAverage: function () {
//     console.log(this.name);
//     console.log(this.salesAverage);
//   },
// };
// site.push(Lima);




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


