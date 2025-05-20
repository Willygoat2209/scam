// Show the popup after 5 seconds
setTimeout(() => {
  document.getElementById("scam-popup").classList.remove("hidden");
}, 5000);

function fakeFix() {
  alert("Fix in progress...\n Please do not close tab");
}

function dismissPopup() {
  document.getElementById("scam-popup").classList.add("hidden");
}
