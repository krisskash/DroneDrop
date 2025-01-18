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

  // Navbar toggler functionality
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show");
    });
  }

  // Close the navbar when clicking outside
  document.addEventListener("click", function (event) {
    if (
      navbarCollapse &&
      navbarCollapse.classList.contains("show") &&
      !navbarToggler.contains(event.target) &&
      !navbarCollapse.contains(event.target)
    ) {
      navbarToggler.click(); // Simulate toggler click to close the menu
    }
  });  

// Load header and footer with appropriate scripts
loadComponent("#header", "../components/header.html", initializeHeaderScripts);
loadComponent("#sidebar", "../components/sidebar.html");
loadComponent("#banner", "../components/banner.html");
loadComponent("#homebanner", "../components/banner-home.html");
loadComponent("#about", "../components/about.html");
loadComponent("#contact", "../components/contact.html");
loadComponent("#footer", "../components/footer.html");

// Example: Dynamically add shop cards
const shopData = [
  { name: "Shop 1", description: "This is Shop 1", image: "shop1.jpg" },
  { name: "Shop 2", description: "This is Shop 2", image: "shop2.jpg" },
  { name: "Shop 3", description: "This is Shop 3", image: "shop3.jpg" },
];

function loadShops(selector, data) {
  const container = document.querySelector(selector);
  data.forEach((shop) => {
    const shopCard = document.createElement("div");
    shopCard.className = "shop-card";
    shopCard.innerHTML = `
      <img src="../assets/images/shops/${shop.image}" alt="${shop.name}" class="shop-image" />
      <h3 class="shop-name">${shop.name}</h3>
      <p class="shop-description">${shop.description}</p>
    `;
    container.appendChild(shopCard);
  });
}
// Load shop cards
loadShops("#shop-list", shopData);
console.log('Waqas');