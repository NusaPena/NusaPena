import "regenerator-runtime"; /* for async await transpile */
import "./components/navigation-bar";
import "./components/hero-section";
import "./components/genre-section";
import "./components/footer-bar";
import "../styles/main.scss";
import "./components/story-navigation";
import "./components/story-list";
import "./components/story-item";

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