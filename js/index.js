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

//nav bar link updates
const allNav = document.querySelectorAll("nav > a");
for (let i = 0; i < 6; i++) {
  allNav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

//cta updates
document.querySelector(".cta-text > h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text > button").textContent = siteContent.cta.button;
document.querySelector("#cta-img").setAttribute("src", siteContent.cta["img-src"]);

//main section updates
const allTextContent = document.querySelectorAll(".text-content");
allTextContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
allTextContent[0].children[1].textContent = siteContent["main-content"]["features-content"];
allTextContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
allTextContent[1].children[1].textContent = siteContent["main-content"]["about-content"];
allTextContent[2].children[0].textContent = siteContent["main-content"]["services-h4"];
allTextContent[2].children[1].textContent = siteContent["main-content"]["services-content"];
allTextContent[3].children[0].textContent = siteContent["main-content"]["product-h4"];
allTextContent[3].children[1].textContent = siteContent["main-content"]["product-content"];
allTextContent[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
allTextContent[4].children[1].textContent = siteContent["main-content"]["vision-content"];
document.querySelector(".middle-img").setAttribute("src",siteContent["main-content"]["middle-img-src"]);

// contact updates
document.querySelector(".contact > h4").textContent = siteContent["contact"]["contact-h4"];
const contactParagraphs = document.querySelectorAll(".contact > p");
contactParagraphs[0].textContent = siteContent.contact.address;
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;


// footer updates
document.querySelector("footer > p").textContent = siteContent.footer.copyright;


allNav.forEach(node => node.style.color = "green");

leftLink = document.createElement("a");
leftLink.textContent = "Left Link";
leftLink.setAttribute("src", "#");
leftLink.style.color = "green";
document.querySelector("nav").prepend(leftLink);

rightLink = document.createElement("a");
rightLink.textContent = "Right Link";
rightLink.setAttribute("src", "#");
rightLink.style.color = "green";
document.querySelector("nav").append(rightLink);