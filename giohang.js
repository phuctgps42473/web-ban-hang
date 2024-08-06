document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(getCookie("cart"));
  let tongSoTien = 0;

  for (const item of cart) {
    addProduct(item);
    tongSoTien += item.price;
  }

  document.getElementById("tong-so-tien").innerText = tongSoTien;

});

function addProduct(item) {

  // Get the table body
  const tableBody = document.getElementById('table');

  // Create a new row
  const row = document.createElement('tr');

  // Create the product info cell
  const productInfoCell = document.createElement('td');
  productInfoCell.classList.add('product-info');

  const productImage = document.createElement('img');
  productImage.src = item.image;
  productImage.alt = item.image;

  const productName = document.createElement('span');
  productName.textContent = item.name;

  productInfoCell.appendChild(productImage);
  productInfoCell.appendChild(productName);

  // Create the price cell
  const priceCell = document.createElement('td');
  priceCell.classList.add('gia-tien');
  priceCell.textContent = item.price;

  // Create the quantity cell
  const quantityCell = document.createElement('td');

  const quantityInput = document.createElement('input');
  quantityInput.classList.add('so-luong');
  quantityInput.type = 'number';
  quantityInput.value = '1';
  quantityInput.min = '1';

  quantityCell.appendChild(quantityInput);

  // Create the total price cell
  const totalPriceCell = document.createElement('td');
  totalPriceCell.classList.add('tong-tien');
  totalPriceCell.textContent = item.price * Number.parseInt(quantityInput.value);

  // Create the remove button cell
  const removeCell = document.createElement('td');

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-btn');
  removeButton.textContent = 'Xóa';

  // Add event listener to remove the row when clicked
  removeButton.addEventListener('click', () => {
    let cartString = document.cookie.split(";")[1].split("=")[1];
    let cart = JSON.parse(cartString);

    let newCart = [];
    for (const i of cart) {
      if (i.name != item.name) {
        newCart.push(i);
      };
    }
    document.cookie = "cart=" + JSON.stringify(newCart);

    let tongSoTien = document.getElementById("tong-so-tien");
    tongSoTien.innerText = Number.parseInt(tongSoTien.innerText) - Number.parseInt(totalPriceCell.innerText);

    tableBody.removeChild(row);

  });

  removeCell.appendChild(removeButton);

  // Append all cells to the row
  row.appendChild(productInfoCell);
  row.appendChild(priceCell);
  row.appendChild(quantityCell);
  row.appendChild(totalPriceCell);
  row.appendChild(removeCell);

  // Append the row to the table body
  tableBody.appendChild(row);

}



document.addEventListener('DOMContentLoaded', () => {

  let tongCongTienElm = document.getElementById("tong-so-tien");
  let giaTienElms = document.getElementsByClassName("gia-tien");
  let soluongElms = document.getElementsByClassName("so-luong");
  let tongTienElms = document.getElementsByClassName("tong-tien");


  for (let i = 0; i < soluongElms.length; i++) {
    const e = soluongElms[i];
    e.addEventListener("change", () => {
      let tc = 0;
      tongTienElms[i].innerText = Number.parseInt(giaTienElms[i].innerText) * e.value;
      for (const tong of tongTienElms) {
        tc += Number.parseInt(tong.innerText)
      }
      tongCongTienElm.innerText = tc;
    });

  }



});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
