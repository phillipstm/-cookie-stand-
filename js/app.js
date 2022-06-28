/*
  FILE app.js
  @date 2022-06-27
*/
"use strict";
console.log('app js file is connected');
// Global variables** 
let storeSites = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
    getCookiesPerHour: function(){}
    getCustPerHour: function(){}
    render: function(){}
  };


 storeSites.push(seattle);


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


  // loop quicky through the site and log their info
  doQuickDemo();
  // Show on of the site on the index page
  displayRandomSite();


/**
 * Loop through the site and display their name and salesAverage
 */
function doQuickDemo() {
  for (let i = 0; i < site.length; i++) {
    // site[i] is the current site object
    let output = `The site called ${site[i].name} sells ${site[i].salesAverage} cookies per hour.`;
    console.log(`Index ${i}: ${output}`);
  }
}

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


// function displayRandomSite() {
//   // Get a random index
//   let randomIndex = getRandomSiteIndex();
//   // Build an article with sub-elements for the site
//   let display = buildSiteDisplay(site[randomIndex]);
//   // get the div from the index page
//   let div = document.getElementById("SiteProfiles");
//   // clear the div and then add the article to the div
//   div.innerHTML = "";
//   div.appendChild(display);
// }

/**
 * Return a random index that is not the same as the previous index.
 *
 * @returns {number} - the index
 */
// function getRandomSiteIndex() {
//   let number = 0;
//   if (site.length > 1) {
//     // Only do this part if there is more than one kitten
//     let needed = true;
//     while (needed) {
//       let randomIndex = Math.floor(Math.random() * site.length);
//       if (randomIndex !== lastsiteIndexlastsiteIndex) {
//         number = randomIndex;
//         lastsiteIndexlastsiteIndex = number;
//         needed = false;
//       }
//     }
//   }
//   return number;
// }

/**
 * Builds the HTML to display a kitten
 *
 * @param {site} site - a site object
 * @returns {Element} - An HTML element containing site display data
 */
function buildSiteDisplay(site) {
  // Use the document object to create an artlicle element
  let article = document.createElement("article");
  let h2 = document.createElement("h2");
  h2.innerText = site.name;
  article.appendChild(h2);
  // Add the age as a paragraph
  let p = document.createElement("p");
  p.innerText = `This kitten is ${kitten.age} months old.  It's interest are:`;
  article.appendChild(p);
  // list of interests
  let ul = document.createElement("ul");
  for (let i = 0; i < kitten.interests.length; i++) {
    let li = document.createElement("li");
    li.innerText = kitten.interests[i];
    ul.appendChild(li);
  }
  article.appendChild(ul);
  // image of the kitten
  let img = document.createElement("img");
  img.setAttribute("src", `images/${kitten.imageName}`);
  img.setAttribute("alt", `An image of the kitten ${kitten.name}`);
  article.appendChild(img);
  // return the article
  return article;
}