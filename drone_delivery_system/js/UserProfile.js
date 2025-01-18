// Function to load and insert a component
function loadComponent(selector, filePath, callback) {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${filePath}`);
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector(selector).innerHTML = data;
        if (callback && typeof callback === "function") {
          callback(); // Execute the callback function after loading
        }
      })
      .catch((error) => console.error(error));
  }
  
  // Header script logic
  function initializeHeaderScripts() {
    const authLinks = document.getElementById("auth-links");
    const userLinks = document.getElementById("user-links");
    const logoutBtn = document.getElementById("logout-btn");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
    const userId = localStorage.getItem("userId");
  
    if (userId) {
      console.log("User is logged in:", userId);
      authLinks.classList.add("d-none");
      authLinks.classList.remove("d-flex");
      userLinks.classList.remove("display-hidden");
    } else {
      console.log("User is not logged in.");
      authLinks.classList.remove("d-none");
      userLinks.classList.add("d-none");
      userLinks.classList.remove("d-flex");
    }
  
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        console.log("Logging out...");
        localStorage.removeItem("userId");
        window.location.href = "/pages/SignIn.html";
      });
    }
  }
  
  // Load header and footer with appropriate scripts
  loadComponent("#header", "../components/header.html", initializeHeaderScripts);
  loadComponent("#footer", "../components/footer.html");
  
  