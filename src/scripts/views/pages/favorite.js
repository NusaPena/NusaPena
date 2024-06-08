import FavoriteStoryIdb from "../../data/favorite-story-idb";

const Favorite = {
  async render() {
    return `
               <section class="explore-section">
                    <story-list></story-list>
               </section>
      `;
  },

  async afterRender() {
    const favoriteListElement = document.querySelector("story-list");
    const favoriteListData = await FavoriteStoryIdb.getAllStory();
    try {
      favoriteListElement.setStoryList(favoriteListData);
    } catch (error) {
      favoriteListElement.isError();
      console.error("An error occurred while fetching favorite story list.", error);
    }
  },
};

export default Favorite;
