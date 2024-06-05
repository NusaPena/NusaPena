class StoryList extends HTMLElement {
	_storyList = [];

	_filteredStoryList = [];

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
		this._filteredStoryList = stories;
		this.render();
		this.updateStoryList();
	}

	updateStoryList() {
		const storyContainer = this.querySelector(".story-items-container");
			storyContainer.innerHTML = "";
				if (this._storyList.length === 0) {
					this.isEmpty();
				} else if (this._filteredStoryList.length === 0) {
					storyContainer.innerHTML = "<h2 class='empty'>Kategori Ini Tidak Memiliki Cerita</h2>";
				} else {
					storyContainer.append(
						...this.createStoryItems(this._filteredStoryList),
					);
				}
	}

	render() {
		this.innerHTML = "";
		this.innerHTML = `
			<div class="story-items-container"></div>
          `;

		this.updateStoryList();
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
}

customElements.define("story-list", StoryList);
