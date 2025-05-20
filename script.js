// Show the popup after 5 seconds
setTimeout(() => {
  document.getElementById("scam-popup").classList.remove("hidden");
}, 5000);

function fakeFix() {
  alert("Fake fix in progress...\nThis is just a simulation.");
}

function dismissPopup() {
  document.getElementById("scam-popup").classList.add("hidden");
}
