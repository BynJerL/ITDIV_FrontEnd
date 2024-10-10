// For navigations

function ToggleNav() {
  var vis = document.getElementById("menu-mob");
  if (vis.style.visibility === "hidden"){
    vis.style.visibility = "visible";
  } else {
    vis.style.visibility = "hidden";
  }
}

function ToggleProdNav(){
  var submenu = document.getElementById("product-submenu-2");
  if (submenu.style.display === "none"){
    submenu.style.display = "block";
  } else {
    submenu.style.display = "none";
  }
}

// Form Validations
function validateRegForm() {
  let pw = document.forms["registration-form"]["password"].value;
  let confirm_pw = document.forms["registration-form"]["confirm-password"].value;
  if (confirm_pw == pw) {
    alert("Registration Success");
    document.getElementsByName("registration-form").reset();
    return true;
  } else {
    alert("Password didn't match!");
    return false;
  }
}

function LoginSuccess() {
  alert("Login Success");
  document.getElementById("login-form").reset();
  return true;
}