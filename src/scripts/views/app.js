import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
     async renderPage() {
          const mainContent  = document.getElementById("main-content");
          const footer = document.querySelector("footer");
          if (footer) {
               footer.style.display = 'block';
          }

          const url  = UrlParser.parseActiveUrlWithCombiner();
          const page = routes[url];
               mainContent.innerHTML = await page.render();
               await page.afterRender();
     }
}

export default App;