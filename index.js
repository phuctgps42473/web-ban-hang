let productList = [
  { name: "Adidas 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/adidas1.jpg", price: 150000 },
  { name: "Adidas 2", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/adidas2.jpg", price: 250000 },
  { name: "Adidas 3", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/adidas3.jpg", price: 350000 },
  { name: "Adidas 4", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/adidas4.jpg", price: 450000 },
  { name: "Nike 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike1.jpg", price: 550000 },
  { name: "Nike 2", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike2.jpg", price: 650000 },
  { name: "Nike 3", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike3.jpg", price: 750000 },
  { name: "Nike 4", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike4.jpg", price: 850000 },
  { name: "Adidas 100", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/adidas1.jpg", price: 950000 },
  { name: "Nike 5", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike5.jpg", price: 430000 },
  { name: "Nike 6", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike6.jpg", price: 240000 },
  { name: "Puma 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/puma1.jpg", price: 180000 },
  { name: "Puma 2", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/puma2.jpg", price: 310000 },
  { name: "Puma 3", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/puma3.jpg", price: 770000 },
  { name: "Balance 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nb1.jpg", price: 190000 },
  { name: "Balance 2", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nb2.jpg", price: 200000 }
];

let hotProductList = [
  { name: "Adidas 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/adidas1.jpg", price: 150000 },
  { name: "Nike 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike1.jpg", price: 550000 },
  { name: "Puma 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/puma1.jpg", price: 180000 },
  { name: "Balance 1", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nb1.jpg", price: 190000 },
  { name: "Adidas 100", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/adidas1.jpg", price: 950000 },
  { name: "Nike 5", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike5.jpg", price: 430000 },
  { name: "Nike 6", desc: "Đây là một đôi giày ối giồi ôi,bạn không nên mua, tìm đôi khác đi nhé", image: "images/nike6.jpg", price: 240000 },
]

document.addEventListener('DOMContentLoaded', () => {
  if (!document.cookie.includes("cart")) {
    document.cookie = "cart=[]";
  }
  document.cookie = "sanpham={}";


  productList.forEach(p => add_item_list(p));
  hotProductList.forEach(p => addHotItemList(p));


});

function addHotItemList(item) {
  // Create a div element
  const div = document.createElement('div');
  div.id = 'hot-product';
  div.className = 'hot-product-item';

  // Create an img element
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.image;

  // Create an h3 element
  const h3 = document.createElement('h3');
  h3.textContent = item.name;

  // Create a p element for the description
  const descriptionP = document.createElement('p');
  descriptionP.textContent = item.desc;

  const addToCartBtn = document.createElement('button');
  addToCartBtn.className = 'add-to-cart-btn';
  addToCartBtn.textContent = 'Bỏ Vào Giỏ';


  addToCartBtn.addEventListener("click", () => {
    let cart;

    try {

      let cartString = document.cookie.split(";")[1].split("=")[1];
      cart = JSON.parse(cartString);
      cart.push(item);
    } catch (error) {
      let cartString = document.cookie.split(";")[0].split("=")[1];
      cart = JSON.parse(cartString);
      cart.push(item);
    }

    document.cookie = "cart=" + JSON.stringify(cart);


  });

  // Create a p element for the price
  const priceP = document.createElement('p');
  priceP.className = 'gia';
  priceP.textContent = item.price;

  // Create a button element
  const button = document.createElement('button');
  button.className = 'xem-chi-tiet';
  button.textContent = 'Xem chi Tiết';
  button.addEventListener("click", () => {
    document.cookie = "sanpham=" + JSON.stringify(item);
    window.location.href = "sanpham.html";
  })


  div.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.2)";
    addToCartBtn.style.opacity = "1";
  });

  div.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
    addToCartBtn.style.opacity = "0";
  });





  // Append the elements to the div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(descriptionP);
  div.appendChild(addToCartBtn);
  div.appendChild(priceP);
  div.appendChild(button);

  // Append the div to the body or any other container
  document.getElementById("hot-products-list").appendChild(div);
}


function add_item_list(item) {
  // Create the product list container

  // Create the product item container
  var productItem = document.createElement('div');
  productItem.className = 'product-item';

  // Create and append the image element
  var img = document.createElement('img');
  img.src = item.image;
  img.alt = 'Image ';
  productItem.appendChild(img);

  productItem.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.2)";
    addToCartBtn.style.opacity = "1";
  });

  productItem.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
    addToCartBtn.style.opacity = "0";
  });






  // Create and append the h3 element
  var h3 = document.createElement('h3');
  h3.textContent = item.name;
  productItem.appendChild(h3);

  var price = document.createElement('strong');
  price.textContent = item.price + " VNĐ";
  productItem.appendChild(price);

  // Create and append the paragraph element
  var p = document.createElement('p');
  p.textContent = item.desc;
  productItem.appendChild(p);

  // Create and append the "Add to Cart" button
  var addToCartBtn = document.createElement('button');
  addToCartBtn.className = 'add-to-cart-btn';
  addToCartBtn.textContent = 'Bỏ Vào Giỏ';
  productItem.appendChild(addToCartBtn);


  addToCartBtn.addEventListener("click", () => {
    let cart;

    try {

      let cartString = document.cookie.split(";")[1].split("=")[1];
      cart = JSON.parse(cartString);
      cart.push(item);
    } catch (error) {
      let cartString = document.cookie.split(";")[0].split("=")[1];
      cart = JSON.parse(cartString);
      cart.push(item);
    }

    document.cookie = "cart=" + JSON.stringify(cart);


  });

  // Create and append the "Mua Ngay" button
  var chiTietBtn = document.createElement('button');
  chiTietBtn.textContent = 'Xem chi tiết';
  chiTietBtn.addEventListener("click", () => {
    document.cookie = "sanpham=" + JSON.stringify(item);
    window.location.href = "sanpham.html";
  })

  productItem.appendChild(chiTietBtn);


  // Append the product list to the body (or any other container)
  document.getElementById("product_lists_item").appendChild(productItem);

}


document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'images/adidas1.jpg',
    'images/nike1.jpg',
    'images/nike4.jpg',
    'images/nike5.jpg',
    'images/nike6.jpg',
    'images/nb1.jpg',
    'images/puma1.jpg',
    'images/puma3.jpg'
  ];

  let currentIndex = 0;

  const sliderImage = document.getElementById('slider-image');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function showImage(index) {
    sliderImage.src = images[index];
  }

  setInterval(() => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
  }, 2000);

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
  });

  // Initial image
  showImage(currentIndex);
});


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
