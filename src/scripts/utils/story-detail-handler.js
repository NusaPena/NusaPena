import StorySource from "../data/story-source";
import FavoriteStoryIdb from "../data/favorite-story-idb";

const StoryDetailHandler = {
  async updateStoryDetails(id) {
    const storyDetail = document.querySelector("story-detail");
    try {
      const story = await StorySource.getStoryDetails(id);
      await storyDetail.setStoryDetails(story);
      await this.setDetailFavoriteStatus(id);
      await this.toggleFavoriteButton(id);
    } catch (error) {
      console.error(`An error occurred while fetching detail (${error})`);
    }
  },

  async setDetailFavoriteStatus(id) {
    const storyDetail = document.querySelector("story-detail");
    const isFavorite = await FavoriteStoryIdb.getStoryData(id);
    storyDetail.setAttribute("favorite", isFavorite ? "true" : "false");
  },

  async toggleFavoriteButton(id) {
    const storyDetail = document.querySelector("story-detail");
    const favorite = storyDetail.getAttribute("favorite");

    if (favorite === "false") {
      const likeButton = document.getElementById("like");

      likeButton.addEventListener("click", () => {
        FavoriteStoryIdb.putStory(storyDetail.getStoryDetails());
        storyDetail.setAttribute("favorite", "true");
        this.toggleFavoriteButton(id);
      });
    }

    if (favorite === "true") {
      const unlikeButton = document.getElementById("unlike");

      unlikeButton.addEventListener("click", () => {
        FavoriteStoryIdb.deleteStory(id);
        storyDetail.setAttribute("favorite", "false");
        this.toggleFavoriteButton(id);
      });
    }
  },
};
export default StoryDetailHandler;
