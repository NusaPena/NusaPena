class StoryList extends HTMLElement {
	_storyList = [];

	constructor() {
		super();
	}

	isEmpty() {
		const emptyMessage = document.createElement("h2");
		emptyMessage.classList.add("empty");
		emptyMessage.textContent = "Daftar Cerita Kosong!";
		this.append(emptyMessage);
	}

	isError() {
		const errorMessage = document.createElement("h2");
		errorMessage.classList.add("error");
		errorMessage.textContent = "Terjadi Kesalahan";
		this.append(errorMessage);
	}

	setStoryList(stories) {
		this._storyList = stories;
		this.render();
	}

	render() {
		this.innerHTML = "";
		this.innerHTML = `
               <div class="header-container">
                    <div class="head-container">
                         <h2>Mau Baca Apa Hari Ini?</h2>
                         <form>
                              <input 
                                   type="text" 
                                   id="search-input" 
                                   name="search_input" 
                                   autocomplete="off"
                                   placeholder="Cari cerita rakyat...";
                              />
                              <button id="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>     
                         </form>
                    </div>

                    <div class="category-btn-container">
                         <button id="show-all-btn">Semua</button>
                         <button id="show-fable-btn"><i class="fa-solid fa-paw"></i> Fabel</button>
                         <button id="show-sage-btn"><i class="fa-solid fa-scroll"></i> Sage</button>
                         <button id="show-legend-btn"><i class="fa-regular fa-flag"></i> Legenda</button>
                         <button id="show-fairly-tale-btn"><i class="fa-solid fa-crown"></i> Dongeng</button>
                    </div>
               </div>
			<div class="story-items-container"></div>
          `;
		if (this._storyList.length === 0) {
			this.isEmpty();
		} else {
			this.querySelector(".story-items-container").append(
				...this.createStoryItem(),
			);
		}
	}

	createStoryItem() {
		return this._storyList.map((stories) => {
			const newStoryitem = document.createElement("story-item");
			newStoryitem.setStoryItem(stories);

			return newStoryitem;
		});
	}
}

customElements.define("story-list", StoryList);
