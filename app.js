var password = document.getElementById("password");

function genPassword() {
    var chars = "0123456789"+"abcdefghijklmnopqrstuvwxyz@#$"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 8;
    var password = "";
 
    for (var i = 0; i < passwordLength; i++) {
      var char = Math.floor(Math.random() * (chars.length + 1));
      password += chars.charAt(char);
  }
    document.getElementById("password").value = password;
}