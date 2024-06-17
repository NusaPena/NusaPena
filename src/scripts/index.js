import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./data/personality-questions";

import "./components/navigation-bar";
import "./components/hero-section";
import "./components/genre-section";
import "./components/story-navigation";
import "./components/story-list";
import "./components/story-item";
import "./components/story-detail";
import "./components/about-us";
import "./components/personality-box";
import "./components/footer-bar";

import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App();

window.addEventListener("DOMContentLoaded", async () => {
     app.renderPage();
     swRegister();
});

window.addEventListener("hashchange", () => {
     app.renderPage();
});