const HeaderBtn = document.querySelector("#header-btn");
const aboutMeBtn = document.querySelector("#aboutme-btn");
const galleryBtn = document.querySelector("#gallery-btn");
const contactBtn = document.querySelector("#contact-btn");
const content = document.querySelector(".content");
window.addEventListener("DOMContentLoaded", renderAboutPage);
HeaderBtn.addEventListener("click", renderAboutPage);
aboutMeBtn.addEventListener("click", renderAboutPage);
galleryBtn.addEventListener("click", renderGalleryPage);
contactBtn.addEventListener("click", renderContactPage);

const XHR = new XMLHttpRequest();
function Renderer(page) {
 XHR.open("GET", page, true);
 XHR.send();
 
 XHR.onload = function () {
 if (this.status === 304) {
 return;
 } else if (this.status === 200) {
 content.innerHTML = this.response;
 }
 };
}
function renderAboutPage() {
 Renderer("./components/about.txt");
}
function renderGalleryPage() {
 Renderer("./components/gallery.txt");
}
function renderContactPage() {
 Renderer("./components/contact.txt");
 setTimeout(() => {
 const form = document.querySelector("form");
 let firstName = document.querySelector("#first-name");
 form.addEventListener("submit", (event) => {
 event.preventDefault();
 alert(
 `Thank you ${firstName.value} for for your suggestions, we'll make sure to look 
through it!`
 );
 });
 }, 500);
}