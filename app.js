
function verify() {
  let userLogin = document.getElementById("login-user").value;
  let userPassword = document.getElementById("login-pass").value;
  let username = 'Admin';
  let password = 'Password'

  if (userLogin == username && userPassword == password) {
    document.getElementById("status").innerText = "Login Successful"
    window.location.assign("https://kyle-davie.github.io/publishlive/Root/success.html")
    
  } else {
    document.getElementById("status").innerText = "failed";
    console.log(userLogin);
  }
}