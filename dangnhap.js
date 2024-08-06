
document.addEventListener('DOMContentLoaded', () => {

  let dangnhapbtn = document.getElementById("dangnhap");
  let username = document.getElementById("username");
  let password = document.getElementById("password");


  dangnhapbtn.onclick = function (e) {

    if (
      username.value.trim().length == 0 ||
      password.value.trim().length == 0
    ) {
      alert("Bạn chưa nhập đầy đủ thông tin!")
      e.preventDefault();
    }
  }


});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
