
document.addEventListener('DOMContentLoaded', () => {
  let item = JSON.parse(getCookie("sanpham"));

  // Create the section element
  const section = document.createElement('section');
  section.className = 'product-details';

  // Create the product gallery div
  const productGallery = document.createElement('div');
  productGallery.className = 'product-gallery';

  // Create the main image
  const mainImg = document.createElement('img');
  mainImg.id = 'main_img';
  mainImg.src = item.image;
  mainImg.alt = 'Product Main Image';

  // Create the thumbnails div
  const thumbnails = document.createElement('div');
  thumbnails.className = 'thumbnails';

  // Create the button for the thumbnail
  const thumbnailButton = document.createElement('button');
  thumbnailButton.id = 'img_2';

  // Create the thumbnail image
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = item.image;
  thumbnailImg.alt = 'Thumbnail 1';

  // Append the thumbnail image to the button
  thumbnailButton.appendChild(thumbnailImg);

  // Append the button to the thumbnails div
  thumbnails.appendChild(thumbnailButton);

  // Append the main image and thumbnails to the product gallery
  productGallery.appendChild(mainImg);
  productGallery.appendChild(thumbnails);

  // Create the product info div
  const productInfo = document.createElement('div');
  productInfo.className = 'product-info';

  // Create the product title
  const productTitle = document.createElement('h1');
  productTitle.textContent = item.name;

  // Create the price paragraph
  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = item.price +" VND";

  // Create the description paragraph
  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = item.desc;

  // Create the sizes paragraph
  const sizes = document.createElement('p');
  sizes.className = 'sizes';
  sizes.textContent = 'Sizes:';

  // Create the sizes container div
  const sizesContainer = document.createElement('div');
  sizesContainer.style.display = 'flex';
  sizesContainer.style.alignItems = 'center';
  sizesContainer.style.justifyContent = 'center';
  sizesContainer.style.gap = '10px';

  // Create size options
  const sizeOptions = [
    { id: '39', label: '39', value: '39' },
    { id: '40', label: '40', value: '40' },
    { id: '41', label: '41', value: '41' },
    { id: '42', label: '42', value: '42' }
  ];

  sizeOptions.forEach(size => {
    const sizeDiv = document.createElement('div');
    const sizeInput = document.createElement('input');
    sizeInput.type = 'radio';
    sizeInput.id = size.id;
    sizeInput.name = 'sizegiay';
    sizeInput.value = size.value;
    const sizeLabel = document.createElement('label');
    sizeLabel.htmlFor = size.id;
    sizeLabel.textContent = size.label;
    sizeDiv.appendChild(sizeInput);
    sizeDiv.appendChild(sizeLabel);
    sizesContainer.appendChild(sizeDiv);
  });

  // Append sizes container to sizes paragraph
  sizes.appendChild(sizesContainer);

  // Create the colors paragraph
  const colors = document.createElement('p');
  colors.className = 'colors';
  colors.textContent = 'Colors: Black, White, Red';

  // Create the buy button
  const buyButton = document.createElement('button');
  buyButton.id = 'mua';
  buyButton.className = 'btn';
  buyButton.textContent = 'Mua Ngay';

  buyButton.addEventListener("click", () => {
    document.cookie = "cart="+ JSON.stringify([item]);
    window.location = "giohang.html";
  });

  // Append elements to product info div
  productInfo.appendChild(productTitle);
  productInfo.appendChild(price);
  productInfo.appendChild(description);
  productInfo.appendChild(sizes);
  productInfo.appendChild(colors);
  productInfo.appendChild(buyButton);

  // Append product gallery and product info to the section
  section.appendChild(productGallery);
  section.appendChild(productInfo);

  // Append the section to the body or another container
  document.getElementById("main").appendChild(section);
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
