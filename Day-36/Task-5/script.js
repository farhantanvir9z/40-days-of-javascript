"use strict";

const dialogBoxElem = document.querySelector("#myDialog");
const openBtnElem = document.querySelector("#open-btn");
const closeBtnElem = document.querySelector("#close-btn");

openBtnElem.addEventListener("click", () => {
  dialogBoxElem.showModal();
 closeBtnElem.addEventListener("click", closeModal)
 document.addEventListener("keydown", closeModalByEsc)
 console.log("listening click event on closeBtn...")
})

function closeModal(e) {
  dialogBoxElem.close();
  console.log("cleaning up click event listener on closeBtn...")
  this.removeEventListener("click", closeModal)
}

function closeModalByEsc(e) {
  if (e.key === "Escape") {
   dialogBoxElem.close();
   console.log("cleaning up click event listener on closeBtn...");
   this.removeEventListener("keydown", closeModalByEsc)
  }
}
