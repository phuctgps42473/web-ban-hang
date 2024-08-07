let productList = [
  {
    name: "Adidas Superstar",
    desc: "Giày cổ điển với thiết kế đặc trưng, phần mũi giày có hình vỏ sò nổi bật và chất liệu da cao cấp.",
    images: [
      "images/superstar1.avif",
      "images/superstar2.avif",
      "images/superstar3.avif"
    ],
    price: 2000000
  },
  {
    name: "Yeezy 350",
    desc: "Giày thể thao phong cách và thoải mái, nổi tiếng với chất liệu Primeknit và đế Boost siêu êm.",
    images: [
      "images/yz1.avif",
      "images/yz2.avif",
      "images/yz3.avif"
    ],
    price: 5000000
  },
  {
    name: "Adidas Gazelle",
    desc: "Giày thể thao cổ điển với chất liệu da lộn mềm mại và đế cao su chắc chắn, mang lại sự êm ái và phong cách.",
    images: [
      "images/gazelle1.avif",
      "images/gazelle2.avif",
      "images/gazelle3.avif"],
    price: 1800000
  },
  {
    name: "Cloudfoam",
    desc: "Giày chạy bộ nhẹ nhàng và thoải mái với công nghệ Cloudfoam đem lại cảm giác êm ái trong mỗi bước.",
    images: [
      "images/cloudfoam1.avif",
      "images/cloudfoam2.avif",
      "images/cloudfoam3.avif"],
    price: 1200000
  },
  {
    name: "Ultra Boost 1.0",
    desc: "Giày chạy bộ với công nghệ đệm Boost tiên tiến, cung cấp sự đàn hồi và thoải mái tối đa khi chạy.",
    images: [
      "images/ultraboost1.avif",
      "images/ultraboost2.avif",
      "images/ultraboost3.avif"],
    price: 3500000
  },
  {
    name: "Adidas Forum 84",
    desc: "Giày thể thao retro với phong cách độc đáo, phần cổ giày cao và đế ngoài bền bỉ.",
    images: [
      "images/forum1.avif",
      "images/forum2.avif",
      "images/forum3.avif"],
    price: 2200000
  },
  {
    name: "Adidas Rivalry",
    desc: "Giày bóng rổ với thiết kế mạnh mẽ, phần đế ngoài chắc chắn và hỗ trợ tốt cho các động tác nhanh.",
    images: [
      "images/rivalry1.avif",
      "images/rivalry2.avif",
      "images/rivalry3.avif"],
    price: 2300000
  },
  {
    name: "Nike Air Force 1",
    desc: "Giày thể thao kinh điển với thiết kế bền bỉ, đế Air giúp giảm chấn và đem lại sự thoải mái trong suốt ngày dài.",
    images: [
      "images/af1.webp",
      "images/af2.webp",
      "images/af3.webp"],
    price: 2500000
  },
  {
    name: "Nike Air Max 270",
    desc: "Giày thể thao với đệm khí lớn ở gót chân, mang lại sự thoải mái và phong cách hiện đại.",
    images: [
      "images/max1.webp",
      "images/max2.webp",
      "images/max3.webp"],
    price: 3000000
  },
  {
    name: "Nike Dunk Low",
    desc: "Giày thể thao phong cách đường phố, với thiết kế đế phẳng và nhiều màu sắc khác nhau.",
    images: [
      "images/dunklow1.webp",
      "images/dunklow2.webp",
      "images/dunklow3.webp"],
    price: 2700000
  },
  {
    name: "Nike Blazer Mid '77",
    desc: "Giày thể thao cổ cao với thiết kế retro, phần da bền và đế cao su giúp bám đường tốt.",
    images: [
      "images/blazer1.webp",
      "images/blazer2.webp",
      "images/blazer3.webp"],
    price: 2400000
  },
  {
    name: "Puma Suede Classic",
    desc: "Giày thể thao với chất liệu da lộn, đế ngoài cao su và phong cách cổ điển.",
    images: [
      "images/suede1.avif",
      "images/suede2.avif",
      "images/suede3.avif"],
    price: 1600000
  },
  {
    name: "Puma RS-X3",
    desc: "Giày thể thao với thiết kế đậm chất công nghệ, phần đế dày và các chi tiết nhiều màu sắc.",
    images: [
      "images/rsx1.avif",
      "images/rsx2.avif",
      "images/rsx3.avif"],
    price: 2800000
  },
  {
    name: "Puma Cali",
    desc: "Giày thể thao phong cách California, với phần đế thấp và thiết kế đơn giản nhưng nổi bật.",
    images: [
      "images/cali1.avif",
      "images/cali2.avif",
      "images/cali3.avif"],
    price: 1900000
  },
  {
    name: "New Balance 574",
    desc: "Giày thể thao với thiết kế đa năng, đế EVA và công nghệ ENCAP cho sự thoải mái và hỗ trợ tốt.",
    images: [
      "images/nb1.webp",
      "images/nb2.webp",
      "images/nb3.webp"],
    price: 2100000
  },
  {
    name: "Converse Chuck Taylor All Star",
    desc: "Giày thể thao kinh điển với thiết kế bất hủ, phần vải bền và đế cao su chắc chắn.",
    images: [
      "images/converse1.webp",
      "images/converse2.webp",
      "images/converse3.webp"],
    price: 1400000
  }
];

document.addEventListener('DOMContentLoaded', () => {
  if (!document.cookie.includes("cart")) {
    document.cookie = "cart=[]";
  }
  document.cookie = "sanpham={}";


  productList.forEach(p => add_item_list(p));
  productList.slice(0,7).forEach(p => addHotItemList(p));


});

function addHotItemList(item) {
  // Create a div element
  const div = document.createElement('div');
  div.id = 'hot-product';
  div.className = 'hot-product-item';

  // Create an img element
  const img = document.createElement('img');
  img.src = item.images[0];
  img.alt = item.images[0];

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
  img.src = item.images[0];
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
    'images/superstar1.avif',
    'images/yz1.avif',
    'images/af1.webp',
    'images/blazer1.webp',
    'images/nb1.webp',
    'images/rsx1.avif',
    'images/converse1.webp'
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
