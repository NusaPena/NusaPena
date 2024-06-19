class StoryNavigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  filterBtnListeners() {
    const filterButtons = [
      { id: "#show-all-btn", category: "" },
      { id: "#show-fable-btn", category: "Fabel" },
      { id: "#show-sage-btn", category: "Sage" },
      { id: "#show-legend-btn", category: "Legenda" },
      { id: "#show-fairly-tale-btn", category: "Dongeng" },
    ];

    filterButtons.forEach((button) => {
      const element = this.querySelector(button.id);
      if (element) {
        element.addEventListener("click", () => {
          document.querySelector(".selected")?.classList.remove("selected");
          element.classList.add("selected");
          const filterBtnEvent = new CustomEvent("selectedCategory", {
            detail: { category: button.category },
          });
          this.dispatchEvent(filterBtnEvent);
        });
      }
    });

    const searchInput = this.querySelector("#search-input");
    const searchIcon = this.querySelector(".search-icon");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const searchQuery = searchInput.value.trim();
        if (searchQuery !== "") {
          searchIcon.classList.add("hidden");
        } else {
          searchIcon.classList.remove("hidden");
        }
        const searchEvent = new CustomEvent("searchStories", {
          detail: { query: searchQuery },
        });
        this.dispatchEvent(searchEvent);
      });
    }
  }

  render() {
    this.innerHTML = `
      <div class="story-nav-container">
        <div class="head-container">
          <h2 class="main-text"id="main-text">Mau Baca Apa Hari Ini?</h2>
          <form>
            <div class="search-container">
              <input 
                type="text" 
                id="search-input" 
                name="search_input" 
                autocomplete="off"
                placeholder="Cari cerita rakyat..."
                />
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
            </div> 
          </form>
        </div>
        <div class="category-btn-container">
          <button id="show-all-btn">Semua</button>
          <button id="show-fable-btn"><i class="fa-solid fa-paw"></i> Fabel</button>
          <button id="show-sage-btn"><i class="fa-solid fa-scroll"></i> Sage</button>
          <button id="show-legend-btn"><i class="fa-solid fa-flag"></i> Legenda</button>
          <button id="show-fairly-tale-btn"><i class="fa-solid fa-crown"></i> Dongeng</button>
        </div>
      </div>
    `;

    this.filterBtnListeners();
  }

  scrollToContent() {
    const element = this.querySelector(".story-nav-container");
    const offset = 130;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

customElements.define("story-navigation", StoryNavigation);
