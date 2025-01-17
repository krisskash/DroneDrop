// Use the baseURL from environment variables or define it here
const baseURL = 'http://localhost:5000';  // Update this with your production URL as needed


const updateAddressForm = document.getElementById("update-address-form");
if (updateAddressForm) {
  updateAddressForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the userId from localStorage or from session (if available)
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("User not logged in. Please log in first.");
      return;
    }

    // Get input values
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;

    // Prepare data to be sent in the API request
    const addressData = { street, city, state, zip };

    try {
      // Send the address data to the backend API
      const response = await fetch(`${baseURL}/api/address/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addressData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Address updated successfully!");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error during address update:", error);
      alert("An error occurred. Please try again.");
    }
  });
}

// DOMContentLoaded handler for fetching and displaying user profile (check if the form exists before adding event listener)
document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("User not logged in. Please log in first.");
    return;
  }

  try {
    // Send the GET request to fetch user profile
    const response = await fetch(`${baseURL}/api/profile/${userId}`);

    const data = await response.json();

    if (response.ok) {
      // Display the user profile and address (if available)
      const profileName = document.getElementById("profile-name");
      const profileEmail = document.getElementById("profile-email");
      const profileAddress = document.getElementById("profile-address");

      if (profileName) profileName.textContent = `Name: ${data.user.name}`;
      if (profileEmail) profileEmail.textContent = `Email: ${data.user.email}`;
      if (profileAddress) profileAddress.textContent = `Address: ${data.user.address || "No address set yet"}`;
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    alert("An error occurred. Please try again.");
  }
});
