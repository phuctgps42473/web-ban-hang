document.addEventListener("DOMContentLoaded", () => {

  let formElement = document.getElementById("forma");

  let inputs = formElement.getElementsByTagName("input");

  let checkoutBtn = document.getElementById("thanhtoan");

  checkoutBtn.addEventListener("click", (e) => {
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      if (element.value.trim().length == 0) {
        console.log(element);
        alert("Xin hãy điền đầy đủ thông tin!");
        e.preventDefault();
        return;
      }

    }

  });

});
