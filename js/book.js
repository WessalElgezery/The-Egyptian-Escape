// booking Form Scripts
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#booking");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("tour-date").value;
    const place = document.getElementById("place-name").value;
    const time = document.getElementById("tour-time").value;
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const nationality = document.getElementById("nationality").value.trim();
    const participants = document.getElementById("participants").value;

    // Basic validation
    if (
      !date || !place || !time || !firstName || !lastName ||
      !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !phone || !/^\+?[0-9\s\-()]+$/.test(phone) ||
      !dob || !nationality || participants < 1 || participants > 20
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // If all is valid
    alert("Booking successful! Thank you.");
    window.location.href = "index.html"; // ✅ Redirect to search page

    form.reset();
  });
});