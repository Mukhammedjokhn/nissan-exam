const vehiclesItem = document.querySelector(".vehicles");
const vehiclesItemIcon = document.querySelector(".down1");
const vehiclesDiv = document.querySelector(".vehicles__div");

const shopItem = document.querySelector(".shop");
const shopItemIcon = document.querySelector(".down2");
const shopDiv = document.querySelector(".shop__div");

const searchItem = document.querySelector(".search__div");
const searchDiv = document.querySelector(".search");

const exit = document.querySelectorAll(".exit");

vehiclesItem.addEventListener("click", () => {
    shopDiv.classList.remove("show");
    shopItemIcon.classList.remove("icon");
    searchDiv.classList.remove("search__show");
    vehiclesDiv.classList.toggle("show");
    vehiclesItemIcon.classList.toggle("icon");
});

shopItem.addEventListener("click", () => {
    vehiclesDiv.classList.remove("show");
    vehiclesItemIcon.classList.remove("icon");
    searchDiv.classList.remove("search__show");
    shopDiv.classList.toggle("show");
    shopItemIcon.classList.toggle("icon");
});

searchItem.addEventListener("click", () => {
    vehiclesDiv.classList.remove("show");
    vehiclesItemIcon.classList.remove("icon");
    shopDiv.classList.remove("show");
    shopItemIcon.classList.remove("icon");
    searchDiv.classList.toggle("search__show");
});

exit.forEach((item) => {
    item.addEventListener("click", () => {
        vehiclesDiv.classList.remove("show");
        vehiclesItemIcon.classList.remove("icon");
        shopDiv.classList.remove("show");
        shopItemIcon.classList.remove("icon");
        searchDiv.classList.remove("search__show");
    });
});

const IMAGE_DATA = [
    {
        id: 0,
        img: "./images/img11.png",
        title: "Kicks",
        desc: "Starting MSRP",
        price: "$20,290 *",
    },
    {
        id: 1,
        img: "./images/img2.png",
        title: "Rogue Sport",
        desc: "Starting MSRP",
        price: "$24,960 *",
    },
    {
        id: 2,
        img: "./images/img13.png",
        title: "Rogue",
        desc: "Starting MSRP",
        price: "$27,360 *",
    },
    {
        id: 3,
        img: "./images/img20.png",
        title: "Murano",
        desc: "Starting MSRP",
        price: "$33,660 *",
    },
    {
        id: 4,
        img: "./images/img12.png",
        title: "Pathfinder",
        desc: "Starting MSRP",
        price: "$35,000 *",
    },
    {
        id: 5,
        img: "./images/img9.png",
        title: "Nissan ARIYA",
        desc: "Starting MSRP",
        price: "$43,190 *",
    },
    {
        id: 6,
        img: "./images/img10.png",
        title: "Armada",
        desc: "Starting MSRP",
        price: "$50,400 *",
    },
];

const vehiclesImage = document.querySelector(".vehicles__image");

IMAGE_DATA.forEach((item) => {
    let card = document.createElement("div");
    card.className = "vehicles__card";
    card.innerHTML = `
        <img src=${item.img} alt="" />
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <p>${item.price}</p>
    `;
    vehiclesImage.appendChild(card);
});

const bannerContainer = document.querySelector(".banner__container");

IMAGE_DATA.forEach((item) => {
    let card = document.createElement("div");
    card.className = "banner__card";
    card.innerHTML = `
        <img src=${item.img} alt="" />
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <p>${item.price}</p>
    `;
    bannerContainer.appendChild(card);
});

// const LINK_DATA = [
//     {
//         ul: "NISSAN AT HOME",
//         li: [
//             "Get Started",
//             "All Vehicles",
//             "Build Your Nissan",
//             "Search Inventory",
//             "Locate a Dealer",
//             "View a Brochure",
//             "Estimate Payments",
//             "Compare Competitors",
//             "Get Internet Quote",
//             "Get Trade-in Value",
//         ],
//     },
//     {
//         ul: "OWNING",
//         li: [
//             "Owner Portal",
//             "Manuals & Guides",
//             "Parts & Accessories Online",
//             "NissanConnect",
//             "Nissan Service",
//             "Nissan Navigation Store",
//             "Collision Assistance",
//             "Nissan Finance Portal",
//             "Snug Kids",
//         ],
//     },
//     {
//         ul: "ABOUT",
//         li: [
//             "About Nissan",
//             "News & Events",
//             "Nissan Rental Car Program",
//             "Nissan Intelligent Mobility",
//             "Certified Pre-Owned",
//             "Local Nissan Offers",
//             "Accessibility",
//             "Cookie Settings",
//         ],
//     },
//     {
//         ul: "BUSINESS & FLEET",
//         li: [
//             "Overview",
//             "Business Vehicles",
//             "Fleet",
//             "Offers & Financing",
//             "Program Benefits",
//             "Upfit & Accessories",
//             "For Dealers",
//         ],
//     },
// ];
