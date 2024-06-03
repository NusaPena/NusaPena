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
	}

	applyCategoryStyle() {
		const { category } = this._storyItem;
		const span = this.querySelector(".category-information");
		if (category === "Fabel") {
			span.classList.add("category-fable");
			span.innerHTML = `
                    <p><i class="fa fa-paw"></i> ${this._storyItem.category}</p>
               `;
		} else if (category === "Sage") {
			span.classList.add("category-sage");
			span.innerHTML = `
                    <p><i class="fa fa-scroll"></i> ${this._storyItem.category}</p>
               `;
		} else if (category === "Legenda") {
			span.classList.add("category-legend");
			span.innerHTML = `
                    <p><i class="far fa-flag"></i> ${this._storyItem.category}</p>
               `;
		} else if (category === "Dongeng") {
			span.classList.add("category-dongeng");
			span.innerHTML = `
                    <p><i class="fa fa-crown"></i> ${this._storyItem.category}</p>
               `;
		}
	}
	// this.addEventListener("click", this.navigateToDetail);
	// this.addEventListener("keydown", (event) => {
	//      if (event.key === "Enter") {
	//           this.navigateToDetail();
	//      }
	// });

	// navigateToDetail() {
	// 	window.location.href = `#/details-page/${this._storyItem.id}`;
	// }
}

customElements.define("story-item", Storyitem);
