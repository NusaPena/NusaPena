import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

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