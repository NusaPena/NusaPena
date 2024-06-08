class Storyitem extends HTMLElement {
	_storyItem = {};

	constructor() {
		super();
	}

	getStoryItem() {
		return this._storyItem;
	}

	setStoryItem(story) {
		this._storyItem = story;
		this.render();
	}

	render() {
		this.innerHTML = `
               <div class="item-container">
                    <div class="image-container">
                         <picture class="resto-img">
                              <source media="(min-width: 1080px)" srcset="http://localhost:5000/images/medium/${this._storyItem.imageId}">
                              <img
                                   src="http://localhost:5000/images/small/${this._storyItem.imageId}""
                                   alt="Restoran ${this._storyItem.title}"
                              />
                         </picture>
                    </div>

                    <div class="details-container">
                         <span class="category-information"></span>
                         <h3 class="item-title">${this._storyItem.title}</h3>
                         <p class="item-desc">${this._storyItem.storyDesc}</p>
                    </div>
               </div>
          `;

		this.applyCategoryStyle();

		this.addEventListener("click", this.navigateToDetail);
		this.addEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				this.navigateToDetail();
			}
		});
	}

	applyCategoryStyle() {
		const categoryMap = {
			Fabel: {
				class: "category-fable",
				icon: "fa fa-paw",
				text: "Fabel",
			},
			Sage: {
				class: "category-sage",
				icon: "fa fa-scroll",
				text: "Sage",
			},
			Legenda: {
				class: "category-legend",
				icon: "far fa-flag",
				text: "Legenda",
			},
			Dongeng: {
				class: "category-dongeng",
				icon: "fa fa-crown",
				text: "Dongeng",
			},
		};

		const { category } = this._storyItem;
		const span = this.querySelector(".category-information");
		const categoryInfo = categoryMap[category];

			if (categoryInfo) {
				span.classList.add(categoryInfo.class);
				span.innerHTML = `<p><i class="${categoryInfo.icon}"></i> ${categoryInfo.text}</p>`;
			}
	}

	navigateToDetail() {
		window.location.href = `#/detail/${this._storyItem.id}`;
	}
}

customElements.define("story-item", Storyitem);
