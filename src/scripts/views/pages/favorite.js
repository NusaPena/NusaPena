import FavoriteStoryIdb from "../../data/favorite-story-idb";

const Favorite = {
  async render() {
    return `
      <section class="explore-section">
        <story-navigation></story-navigation>
        <story-list></story-list>
      </section>
    `;
  },

  async afterRender() {
    const mainText = document.getElementById("main-text");
    console.log(mainText);
    mainText.textContent = "Koleksi Cerita Favoritmu";

    const favoriteListElement = document.querySelector("story-list");
    const storyNavigation = document.querySelector("story-navigation");
    if (storyNavigation) {
      storyNavigation.scrollToContent();
      storyNavigation.addEventListener("selectedCategory", (filterBtnEvent) => {
        const { category } = filterBtnEvent.detail;
        if (favoriteListElement) {
          favoriteListElement.filterStories(category);
        }
      });

      storyNavigation.addEventListener("searchStories", async (searchEvent) => {
        const { query } = searchEvent.detail;
        try {
          const favoriteListData = await FavoriteStoryIdb.searchStories(query);
          if (favoriteListElement) {
            favoriteListElement.setStoryList(favoriteListData);
          }
        } catch (error) {
          if (favoriteListElement) {
            favoriteListElement.isError();
          }
          console.error("Error searching favorite stories: ", error);
        }
      });
    }

    try {
      const favoriteListData = await FavoriteStoryIdb.getAllStory();
      if (favoriteListData.length === 0) {
        favoriteListElement.setStoryList([]);
      } else {
        favoriteListElement.setStoryList(favoriteListData);
      }
    } catch (error) {
      if (favoriteListElement) {
        favoriteListElement.isError();
      }
      console.error("Error fetching favorite story list: ", error);
    }
  },
};

export default Favorite;
