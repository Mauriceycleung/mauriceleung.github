//A function when a button is clicked, url will be opened, loading the embedded python game into the iframe
function loadEmbed(url) {
  var iframe = document.getElementById('embedded');
  iframe.src = url;
  iframe.style.width = '1000px';
  iframe.style.height = '900px';
}


//A function when a Log In is clicked, If the username and password are correct, it hides the login menu and display the embedded python game, or else it prompts an error message
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === 'Maurice' && password === 'Leung') {
    document.getElementById('loginmenu').style.display = 'none';
    document.getElementById('hidemenu').style.display = 'block';
  }
  else {
    alert('Incorrect Username or Password. Please try again.');
  }
}

// Enable login with Enter key
document.getElementById('password').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    login();
  }
});
