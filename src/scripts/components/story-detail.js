class StoryDetail extends HTMLElement {
	static observedAttributes = ["favorite"];

	_storyDetails = {};

	constructor() {
		super();
		this._favorite = this.getAttribute("favorite");
	}

	attributeChangedCallback(name, oldvalue, newValue) {
		this[`_${name}`] = newValue;
		this.render();
	}

    isEmpty() {
		const emptyMessage = document.createElement("h2");
            emptyMessage.classList.add("empty");
            emptyMessage.textContent = "Cerita Kosong!";
		this.append(emptyMessage);
	}

	isError() {
		const errorMessage = document.createElement("h2");
            errorMessage.classList.add("error");
            errorMessage.textContent = "Terjadi Kesalahan";
		this.append(errorMessage);
	}

    isLoading() {
        this.innerHTML = `
            <div class="story-detail-skeleton">
                <div class="detail-skeleton-image"></div>
                <div class="detail-skeleton-title"></div>
                <div class="detail-skeleton-text"></div>
                <div class="detail-skeleton-text"></div>
                <div class="detail-skeleton-text"></div>
                <div class="detail-skeleton-text"></div>
                <div class="detail-skeleton-text"></div>
                <div class="detail-skeleton-text"></div>
                <div class="detail-skeleton-morals"></div>
            </div>
        `;
    }

	getStoryDetails() {
		return this._storyDetails;
	}

	setStoryDetails(story) {
        try {
            this._storyDetails = story;
            this.render();
        } catch (error) {
            this.isError();
            console.error(`An error occurred while setting story detail : ${error}`);
        }
	}

	connectedCallback() {
		this.isLoading();
	}

    render() {
        if (!this._storyDetails || !this._storyDetails.category) {
            this.innerHTML = "";
            return;
        }

        this.innerHTML = `
            <section class="story-detail">
                <div class="detail-container">
                    <div class="picture-container">
                        <picture>
                            <source media="(min-width: 1080px)" srcset="https://nusapena-api.vercel.app/images/large/${this._storyDetails.imageId}">
                            <img src="https://nusapena-api.vercel.app/images/medium/${this._storyDetails.imageId}" alt="Cerita">
                        </picture>
                    </div>
    
                    <div class="detail-info">
                        <div class="top-detail">
                            <button class="back"><i class="fa-solid fa-arrow-left"></i></button>
                            <span class="category-information"></span>
                            <span class="item-origin"><p>${this._storyDetails.origin}</p></span>
                            <button class="like-button" aria-label="Favorite Button"></button>
                        </div>
                        <h3 class="detail-title">${this._storyDetails.title}</h3>
                        <p class="detail-synopsis">${this._storyDetails.synopsis}</p>
                    </div>
                </div>
        
                <div class="detail-content">
                    <h3 class="detail-title ">${this._storyDetails.title}</h3>
                    <span class="line ${this._storyDetails.category.toLowerCase()}-line"></span>
                    <p class="detail-origin">Asal : ${this._storyDetails.origin}</p>
                    <p class="detail-desc">${this._storyDetails.storyDesc}</p>
                </div>
    
                <div class="detail-morals ${this._storyDetails.category.toLowerCase()}-border">
                    <h3 class="morals-title">Moral</h3>
                    <span class="line ${this._storyDetails.category.toLowerCase()}-line"></span>
                    <p class="morals-text">${this._storyDetails.morals}</p>
                </div>
            </section>
        `;

        const backButton = this.querySelector(".back");
        backButton.addEventListener("click", () => {
            window.history.back();
        });

        const likeButton = this.querySelector(".like-button");
        if (this._favorite === "true") {
            likeButton.id = "unlike";
            likeButton.innerHTML = "<i class='fa-solid fa-heart'></i>";
            likeButton.setAttribute("aria-label", "Simpan ke Favorit");
        } else {
            likeButton.id = "like";
            likeButton.innerHTML = "<i class='fa-regular fa-heart'></i>";
            likeButton.setAttribute("aria-label", "Simpan ke Favorit");
        }

        this.applyCategoryStyle();
        this.scrollToContent();
    }

	scrollToContent() {
		const element = this.querySelector(".story-detail");
		const offset = 130;

		const elementPosition = element.getBoundingClientRect().top + window.scrollY;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}

	applyCategoryStyle() {
		const { category } = this._storyDetails;
		const span = this.querySelector(".category-information");
		if (category === "Fabel") {
			span.classList.add("category-fable");
			span.innerHTML = `
                    <p><i class="fa fa-paw"></i> ${this._storyDetails.category}</p>
            `;
		} else if (category === "Sage") {
			span.classList.add("category-sage");
			span.innerHTML = `
                    <p><i class="fa fa-scroll"></i> ${this._storyDetails.category}</p>
            `;
		} else if (category === "Legenda") {
			span.classList.add("category-legend");
			span.innerHTML = `
                    <p><i class="fa-solid fa-flag"></i> ${this._storyDetails.category}</p>
            `;
		} else if (category === "Dongeng") {
			span.classList.add("category-dongeng");
			span.innerHTML = `
                    <p><i class="fa fa-crown"></i> ${this._storyDetails.category}</p>
            `;
		}
	}
}
customElements.define("story-detail", StoryDetail);