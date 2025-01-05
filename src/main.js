// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}

if (/Mobi|Android/i.test(navigator.userAgent)) {
  disableScroll();
}
