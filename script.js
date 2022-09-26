const app = {
  loginForm: document.getElementById("login-form"),
  signIn: document.getElementById("login-btn-in"),
  signUp: document.getElementById("login-btn-up"),
  loginBtn: document.getElementById("login-btn-in"),
  signUpBtn: document.getElementById("login-btn-up"),
  h1SignIn: document.getElementById("h1-sign-in"),
  h1SignUp: document.getElementById("h1-sign-up"),
  createBtn: document.getElementById("create-btn"),
  errorMsgUser: document.getElementById("error-msg-login"),
  errorMsgCreate: document.getElementById("error-msg-create"),
  savedUsername: [],    //savedUsername: new Array(3), 
  savedPassword: []     //savedPassword: new Array(3)  
};

function errorMsg() {
  app.errorMsgUser.classList.remove("error-msg");
  setTimeout(function () {
    app.errorMsgUser.classList.add("error-msg");
  }, 2000);
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

function removeSignInUP() {
  app.loginBtn.style.display = "none";
  app.signUpBtn.style.display = "none";
  app.h1SignIn.style.display = "none";
  app.h1SignUp.style.display = "block";
  app.createBtn.style.display = "block";
  app.errorMsgUser.classList.add("error-msg");
}

function addSignInUP() {
  app.loginBtn.style.display = "inline-block";
  app.signUpBtn.style.display = "inline-block";
  app.createBtn.style.display = "none";
  app.h1SignIn.style.display = "block";
  app.h1SignUp.style.display = "none";
  app.errorMsgCreate.classList.add("error-msg");  
}

document.getElementById("login-btn-in").addEventListener("click", (e) => {
  e.preventDefault;
  username = app.loginForm.user.value;
  password = app.loginForm.pass.value;

  for (let i = 0; i < Array.length; i++) {
    if (username == app.savedUsername[i] && password == app.savedPassword[i]) {
      window.location = "main.html";
      break;
    } else {
      errorMsg();
      break;
    }
  }
});

document.getElementById("login-btn-up").addEventListener("click", (e) => {
  e.preventDefault;
  removeSignInUP();
});

function adduser() { // <= remove when done, used to see saved pass and user  
  let saved1 = app.savedUsername.map((user) => `<li>${user}</li>`).join("\n");
  document.querySelector("#ulus").innerHTML = saved1;
  let saved2 = app.savedPassword.map((user) => `<li>${user}</li>`).join("\n");
  document.querySelector("#ulpa").innerHTML = saved2;
}

document.getElementById("create-btn").addEventListener("click", (e) => {
  e.preventDefault;
  if (
    app.loginForm.user.value.length < 5 ||
    app.loginForm.pass.value.length < 5
  ) {
    app.errorMsgCreate.classList.remove("error-msg");
    setTimeout(function () {
      app.errorMsgCreate.classList.add("error-msg");
    }, 4000);
  } else {
    app.savedUsername.push(app.loginForm.user.value);
    app.savedPassword.push(app.loginForm.pass.value);
    app.loginForm.user.value = null;
    app.loginForm.pass.value = null;
    adduser(); // <= remove when done
    addSignInUP();
  }
});
