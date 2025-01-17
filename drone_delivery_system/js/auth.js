// Use the baseURL from environment variables or define it here
const baseURL = 'http://localhost:5000';  // Make sure to update this for production

// Sign-up function
async function handleSignUp(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the input values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;

  // Validate password confirmation
  if (password !== confirmpassword) {
    alert("Passwords do not match!");
    return;
  }

  // Prepare data to be sent in the API request
  const userData = { name, email, password };

  try {
    // Send data to the backend API using fetch
    const response = await fetch(`${baseURL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    // Check if the signup was successful
    const data = await response.json();
    if (response.ok) {
      alert("Sign-up successful!");
      // Redirect to the signin page
      window.location.href = "SignIn.html";  // Redirect to signin.html
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
    alert("An error occurred: " + error.message);
  }
}

// Login function
async function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the input values from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Prepare data to be sent in the API request
  const userData = { email, password };

  try {
    // Send data to the backend API using fetch
    const response = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    // Check if the login was successful
    const data = await response.json();
    if (response.ok) {
      alert("Login successful!");

      // Save the userId (_id) in localStorage
      localStorage.setItem("userId", data.data._id); // Using the _id field from the response

      // Redirect the user to the homepage or another page after successful login
      window.location.href = "/pages/index.html"; // Change this to the page you want to redirect to
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again.");
  }
}

// Logout function
async function handleLogout() {
  try {
    // Send the logout request to the backend API
    const response = await fetch(`${baseURL}/api/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the logout was successful
    const data = await response.json();
    if (response.ok) {
      alert("Logout successful!");

      // Clear the userId from localStorage
      localStorage.removeItem("userId");

      // Redirect the user to the login page or homepage
      window.location.href = "/signin.html"; // Adjust this as per your needs
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error during logout:", error);
    alert("An error occurred during logout. Please try again.");
  }
}

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout-btn");

if (signupForm) {
  signupForm.addEventListener("submit", handleSignUp);
}

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}