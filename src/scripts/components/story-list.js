class StoryList extends HTMLElement {
	_storyList = [];

	_filteredStoryList = [];

	constructor() {
		super();
	}

	connectedCallback() {
		this.isLoadingItem();
	}

	isEmpty() {
		const emptyMessage = document.createElement("h2");
			emptyMessage.classList.add("empty");
			emptyMessage.textContent = "Daftar Cerita Kosong!";
		this.append(emptyMessage);
	}

	categoryIsEmpty() {
		const emptyCategoryMessage = document.createElement("h2");
			emptyCategoryMessage.classList.add("empty");
			emptyCategoryMessage.textContent = "Kategori Ini Tidak Memiliki Cerita";
		this.append(emptyCategoryMessage);
	}

	isError() {
		const errorMessage = document.createElement("h2");
			errorMessage.classList.add("error");
			errorMessage.textContent = "Terjadi Kesalahan";
		this.append(errorMessage);
	}

	setStoryList(stories) {
		this._storyList = stories;
		this._filteredStoryList = stories;
		this.render();
		this.updateStoryList();
	}

	isLoadingItem() {
		this.render();
		const loadingContainer = this.querySelector(".loading-container");
			if (!loadingContainer) {
				console.error("loading-container not found");

				return;
			}
			loadingContainer.innerHTML = "";

			for (let item = 0; item < 8; item += 1) {
				const itemSkeletonUI = document.createElement("div");
					itemSkeletonUI.classList.add("item-skeleton-ui");
					itemSkeletonUI.innerHTML = `
						<div class="skeleton-img-container">
							<div class="img-skeleton"></div>
						</div>
						<div class="skeleton-content-container">
							<div class="upper-skeleton">
								<div class="category-skeleton"></div>
								<div class="location-skeleton"></div>
							</div>

							<div class="bottom-skeleton">
								<div class="title-skeleton"></div>
								<div class="paragraph-skeleton"></div>
								<div class="paragraph-skeleton"></div>
								<div class="paragraph-skeleton"></div>
								<div class="paragraph-skeleton"></div>
							</div>
						</div>
                         `;
				loadingContainer.appendChild(itemSkeletonUI);
			}
	}

	updateStoryList() {
		this.clearMessages();
		const storyContainer = this.querySelector(".story-items-container");
			if (!storyContainer) {
				return;
			}

			const loadingContainer = document.querySelector(".loading-container");
				if (loadingContainer) {
					loadingContainer.classList.remove("loading-container");
					loadingContainer.style.display = "none";
				}

			storyContainer.innerHTML = "";
				if (this._storyList.length === 0) {
					this.isEmpty();
				} else if (this._filteredStoryList.length === 0) {
					this.categoryIsEmpty();
				} else {
					storyContainer.append(
						...this.createStoryItems(this._filteredStoryList),
					);
				}
	}

	render() {
		this.innerHTML = "";
		this.innerHTML = `
			<div class="loading-container"></div>
			<div class="story-items-container"></div>
          `;
	}

	createStoryItems(stories) {
		return stories.map((story) => {
			const newStoryitem = document.createElement("story-item");
				newStoryitem.setStoryItem(story);

			return newStoryitem;
		});
	}

	filterStories(category) {
		if (category === "") {
			this._filteredStoryList = this._storyList;
		} else {
			this._filteredStoryList = this._storyList.filter(
				(story) => story.category === category,
			);
		}
		this.updateStoryList();
	}

	clearMessages() {
		const messages = this.querySelectorAll(".empty, .error");
		messages.forEach((message) => message.remove());
	}
}

customElements.define("story-list", StoryList);
