let popup = document.querySelector(".popup");
let openPopupButton = document.querySelector("#openPopup");
let closePopupButton = document.querySelector("#closePopup");

function openPopup() {
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);