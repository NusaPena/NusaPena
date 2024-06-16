import itActsAsfavoriteStoryModel from "./contracts/favoriteStoryContract";

let favoriteStory = [];

const favoriteStoryArray = {
  getStoryData(id) {
    return favoriteStory.find((story) => story.id === id);
  },

  getAllStory() {
    return favoriteStory;
  },

  putStory(story) {
    if (!story.id || this.getStoryData(story.id)) return;
    favoriteStory.push(story);
  },

  deleteStory(id) {
    favoriteStory = favoriteStory.filter(
      (story) => story.id !== id,
    );
  },
};

describe("Testing Array Implementation of Favorite Restaurant Contract", () => {
  afterEach(() => {
    favoriteStory = [];
  });
  itActsAsfavoriteStoryModel(favoriteStoryArray);
});