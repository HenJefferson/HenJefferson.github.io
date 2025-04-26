
document.addEventListener("DOMContentLoaded", function () {
  // Dropdown toggle for mobile menu
  const dropButton = document.getElementById("drop");
  const listGroup = document.getElementById("list-group");

  dropButton.addEventListener("click", function () {

      // Toggle the visibility of the dropdown menu
      if (listGroup.style.display === "none" || listGroup.style.display === "") {
          listGroup.style.display = "block"; // Show the dropdown
      } else {
          listGroup.style.display = "none"; // Hide the dropdown
      }
  });

  // Close the dropdown when clicking on a menu item
  document.getElementById("infos").addEventListener("click", function () {
      listGroup.style.display = "none";
  });

  document.getElementById("cont").addEventListener("click", function () {
      listGroup.style.display = "none";
  });
});
