class GenreSection extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
      this.addEventListeners();
    }
  
    render() {
      this.innerHTML = `
        <section class="genre">
            <h2>Tahukah Kamu?</h2>
            <p>Indonesia memiliki berbagai jenis cerita rakyat loh!</p>
  
            <div class="genre-list">
                <div class="genre-item" data-genre="fabel" tabindex=0>
                    <h3>FABEL</h3>
                    <img src="./images/fabel.png" alt="Fabel">
                </div>
  
                <div class="genre-item" data-genre="sage" tabindex=0>
                    <h3>SAGE</h3>
                    <img src="./images/sage.png" alt="Sage">
                </div>
  
                <div class="genre-item" data-genre="legenda" tabindex=0>
                    <h3>LEGENDA</h3>
                    <img src="./images/legenda.png" alt="Legenda" tabindex=0>
                </div>
  
                <div class="genre-item" data-genre="dongeng" tabindex=0>
                    <h3>DONGENG</h3>
                    <img src="./images/dongeng.png" alt="Dongeng">
                </div>
            </div>
            
            <dialog id="genre-detail">
                <h3 id="detail-title"></h3>
                <hr>
                <p id="detail-description"></p>
            <button id="close-detail-button">Tutup</button>
          </dialog>
        </section>
        </section>
      `;
    }
  
    addEventListeners() {
        const genreItems = this.querySelectorAll(".genre-item");
        const detailDialog = this.querySelector("#genre-detail");
        const detailTitle = this.querySelector("#detail-title");
        const detailDescription = this.querySelector("#detail-description");
        const closeDetailButton = this.querySelector("#close-detail-button");
      
        const genreTitle = {
          fabel: "FABEL",
          sage: "SAGE",
          legenda: "LEGENDA",
          dongeng: "DONGENG"
        }
      
        const genreDescriptions = {
          fabel: "Fabel adalah cerita yang menggambarkan binatang berperilaku seperti manusia dan mengandung pesan moral.",
          sage: "Sage adalah cerita rakyat yang dianggap benar oleh yang punya cerita dan sering kali mengandung unsur sejarah.",
          legenda: "Legenda adalah cerita tentang asal-usul terjadinya suatu tempat atau fenomena alam.",
          dongeng: "Dongeng adalah cerita khayalan yang tidak benar-benar terjadi dan hanya untuk hiburan."
        };
      
        genreItems.forEach(item => {
          item.addEventListener("click", () => {
            const genre = item.getAttribute("data-genre");
            detailTitle.innerText = genreTitle[genre];
            detailDescription.innerText = genreDescriptions[genre];
            detailDialog.showModal();
      
            // Add overlay
            const overlay = document.createElement("div");
            overlay.classList.add("detail-overlay");
            overlay.addEventListener("click", (event) => {
              if (!detailDialog.contains(event.target)) {
                detailDialog.close();
                document.body.removeChild(overlay);
              }
            });
            document.body.appendChild(overlay);
          });
        });
      
        closeDetailButton.addEventListener("click", () => {
            detailDialog.close();
          
            // Remove overlay
            const overlay = document.querySelector(".detail-overlay");
            if (overlay) {
              document.body.removeChild(overlay);
            }
          });
          
          // Close detail dialog when clicking outside
          window.addEventListener("click", (event) => {
            if (event.target === detailDialog) {
                const overlay = document.querySelector(".detail-overlay");
                if (overlay) {
                    detailDialog.close();
                    document.body.removeChild(overlay);
                }
            }
        });
      }
    }
    
    customElements.define("genre-section", GenreSection);
  