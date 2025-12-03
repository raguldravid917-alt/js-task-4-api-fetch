const tableBody = document.getElementById("tableBody");
const loader = document.getElementById("loader");

const userCard = document.getElementById("userCard");
const closeBtn = document.getElementById("closeBtn");

const detailName = document.getElementById("detailName");
const detailUsername = document.getElementById("detailUsername");
const detailEmail = document.getElementById("detailEmail");
const detailPhone = document.getElementById("detailPhone");
const detailWebsite = document.getElementById("detailWebsite");
const detailCity = document.getElementById("detailCity");
const detailCompany = document.getElementById("detailCompany");

// ---------- FETCH USERS FROM API ----------
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    loader.style.display = "none"; // hide loader

    users.forEach((user) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
      `;

      // click row → show details
      tr.addEventListener("click", () => {
        showUserDetails(user);
      });

      tableBody.appendChild(tr);
    });
  })
  .catch((error) => {
    loader.innerHTML = "❌ Failed to fetch users";
    console.error("API Error:", error);
  });

// ---------- SHOW USER DETAILS ----------
function showUserDetails(user) {
  detailName.textContent = user.name;
  detailUsername.textContent = user.username;
  detailEmail.textContent = user.email;
  detailPhone.textContent = user.phone;
  detailWebsite.textContent = user.website;
  detailCity.textContent = user.address.city;
  detailCompany.textContent = user.company.name;

  userCard.style.display = "block";
  userCard.scrollIntoView({ behavior: "smooth" });
}

// ---------- CLOSE CARD ----------
closeBtn.addEventListener("click", () => {
  userCard.style.display = "none";
});
