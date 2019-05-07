const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(logo);

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])
console.log(cta);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
console.log(middleImg);

// let headers = document.querySelectorAll("h4");
// const titles = Object.values(siteContent.nav);
// headers.forEach((e, i) => {
//   e.textContent = titles[i];
// });


const nav = document.querySelectorAll("a");
const navTitles = Object.values(siteContent.nav);
nav.forEach((elem, ind) => {
  elem.textContent = navTitles[ind]
})


const ctaH1 = document.getElementsByTagName('h1')[0];
ctaH1.innerText = (siteContent['cta']['h1'])
console.log(ctaH1);

const buttonText = document.querySelector("button");
buttonText.innerText = (siteContent["cta"]["button"]);

const header1 = document.querySelectorAll("h4");
header1[0].innerText = (siteContent["main-content"][ "features-h4"]);
const featureText = document.querySelectorAll("p");
featureText[0].innerText = (siteContent["main-content"]["features-content"]);

const header2 = document.querySelectorAll("h4");
header2[1].innerText = (siteContent["main-content"][ "about-h4"]);
const aboutText = document.querySelectorAll("p");
aboutText[1].innerText = (siteContent["main-content"]["about-content"]);

const header3 = document.querySelectorAll("h4");
header3[2].innerText = (siteContent["main-content"][ "services-h4"]);
const servicesText = document.querySelectorAll("p");
servicesText[2].innerText = (siteContent["main-content"]["services-content"]);

const header4 = document.querySelectorAll("h4");
header4[3].innerText = (siteContent["main-content"][ "product-h4"]);
const productText = document.querySelectorAll("p");
productText[3].innerText = (siteContent["main-content"]["product-content"]);

const header5 = document.querySelectorAll("h4");
header5[4].innerText = (siteContent["main-content"][ "vision-h4"]);
const visionText = document.querySelectorAll("p");
visionText[4].innerText = (siteContent["main-content"]["vision-content"]);

const header6 = document.querySelectorAll("h4");
header6[5].innerText = (siteContent["contact"][ "contact-h4"]);

const address = document.querySelectorAll("p");
address[5].innerText = (siteContent["contact"]["address"]);

const phone = document.querySelectorAll("p");
phone[6].innerText = (siteContent["contact"]["phone"]);

const email = document.querySelectorAll("p");
email[7].innerText = (siteContent["contact"]["email"]);


const footer = document.querySelector("footer");
footer.textContent = (siteContent["footer"]["copyright"]);

const navA = document.querySelectorAll("a");
navA.forEach(function(elem) {
  elem.style.color = 'green'
})

footer2 = document.querySelector("footer");
let newItem = document.createElement('p');
newItem.textContent = 'This site is crazy cool';
footer2.appendChild(newItem);

newNav = document.querySelector("nav");
let newItem2 = document.createElement('a');
newItem2.textContent = "Author";
newNav.appendChild(newItem2);
newItem2.style.color = 'green';