console.log("JavaScript is working!");
lucide.createIcons();
const slider = document.querySelector(".slider");
function toslide(){
    const gap = parseInt(getComputedStyle(slider).gap);          // read the gap from the CSS, e.g. "32px" -> 32
    const step = slider.querySelector(".slide").offsetWidth + gap; // one banner + one gap
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth-5;
    if(atEnd){
        slider.scrollTo({left:0, behavior:"smooth"});
    }else{
        slider.scrollBy({left:step, behavior:"smooth"});
    }
}
setInterval(toslide, 3000);
const phones = [
  {
    name: "Samsung Galaxy S25 5G (Navy, 128 GB)",
    img: "images/phone1.jpeg",
    rating: 4.6,
    price: "₹58,999",
    oldPrice: "1,04,999",
    offer: "₹56,049"
  },
  {
    name: "OPPO F35 Pro 5G (Sunrise Orange, 128 GB)",
    img: "images/phone2.jpeg",
    rating: 4.2,
    price: "₹54,999",
    oldPrice: "84,999",
    offer: "₹48,000"
  },
  {
    name: "Samsung Galaxy S25 5G (Silver Shadow, 256 GB)",
    img: "images/phone3.jpeg",
    rating: 4.6,
    price: "₹65,999",
    oldPrice: "1,14,999",
    offer: "₹62,699"
  },
  {
    name: "Samsung Galaxy S24 FE 5G (Graphite, 128 GB)",
    img: "images/phone4.jpeg",
    rating: 4.5,
    price: "₹39,999",
    oldPrice: "59,999",
    offer: "₹37,999"
  },
  {
    name: "Samsung Galaxy S26 5G (Black, 256 GB)",
    img: "images/phone5.jpeg",
    rating: 4.6,
    price: "₹87,999",
    oldPrice: "",
    offer: "₹83,999"
  },
  {
    name: "Samsung Galaxy A36 5G (Navy, 128 GB)",
    img: "images/phone6.jpeg",
    rating: 4.4,
    price: "₹24,999",
    oldPrice: "39,499",
    offer: "₹23,749"
  }
];

const phoneRow = document.getElementById("phoneRow");

phones.forEach(phone => {
    phoneRow.innerHTML += `
    <div class="phone-card">
        <img src="${phone.img}" alt="${phone.name}">
        <p>${phone.name}</p>
        <p>${phone.price}</p>
    </div>
    `;
});
// ===== DEALS WITH BADGES =====
const products = [
  {
    name: "Samsung Galaxy S24 5G Snapdragon (Onyx Black, 128 GB)",
    img: "images/product1.jpeg",
    badge: "Top Discount",
    badgeColor: "#4338ca",
    rating: 4.6,
    price: 49999,
    mrp: 74999
  },
  {
    name: "U.S. POLO ASSN. Men ARVANA Slides",
    img: "images/product2.jpeg",
    badge: "Value 365",
    badgeColor: "#e11d48",
    rating: 4.3,
    price: 1068,
    mrp: 1799
  },
  {
    name: "KartV Back Cover for Samsung Galaxy S25 5G",
    img: "images/product3.jpeg",
    badge: "Lowest Price",
    badgeColor: "#16a34a",
    rating: 4.3,
    price: 163,
    mrp: 999
  },
  {
    name: "boAt Airdopes 131 Gen 2, 70H Battery",
    img: "images/product4.jpeg",
    badge: "Bestseller",
    badgeColor: "#ea580c",
    rating: 4.0,
    price: 799,
    mrp: 2990
  },
  {
    name: "Bombay Dyeing Cotton Double Bedsheet with 2 Pillow Covers",
    img: "images/product5.jpeg",
    badge: "Trending",
    badgeColor: "#9333ea",
    rating: 4.7,
    price: 1186,
    mrp: 1319
  },
  {
    name: "HP Wanderer 30 L Laptop Backpack",
    img: "images/product6.jpeg",
    badge: "Hot Deal",
    badgeColor: "#dc2626",
    rating: 4.1,
    price: 353,
    mrp: 1359
  }
];
const productGrid = document.getElementById("productGrid");

products.forEach(product => {
  // work out the discount, e.g. 33
  const off = Math.round((product.mrp - product.price) / product.mrp * 100);

  productGrid.innerHTML += `
    <div class="product-card">
      <div class="product-img-box">
        <span class="badge" style="background: ${product.badgeColor}">${product.badge}</span>
        <img src="${product.img}" alt="${product.name}">
        <span class="rating">${product.rating} ★</span>
      </div>
      <p class="product-name">${product.name}</p>
      <p class="price-line">
        <b>₹${product.price.toLocaleString("en-IN")}</b>
        <s>₹${product.mrp.toLocaleString("en-IN")}</s>
        <span class="off">${off}% off</span>
      </p>
    </div>
  `;
});
