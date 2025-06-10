const closeMessage = document.getElementById("close-message");
const message = document.getElementsByClassName("message")[0];

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 4000);
