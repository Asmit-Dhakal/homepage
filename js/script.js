document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login validation (dummy example)
    if (username === "admin" && password === "password") {
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password");
    }
  });
  
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Perform signup actions (dummy example)
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  });
  