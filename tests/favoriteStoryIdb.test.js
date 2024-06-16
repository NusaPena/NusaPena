import itActsAsFavoriteStoryModel from "./contracts/favoriteStoryContract";
import FavoriteStorytIdb from "../src/scripts/data/favorite-story-idb";

describe("Testing Implementation of Favorite Story IDB Contract", () => {
  afterEach(async () => {
    const allStory = await FavoriteStorytIdb.getAllStory();
    await Promise.all(
      allStory.map((story) => FavoriteStorytIdb.deleteStory(story.id)),
    );
  });

  itActsAsFavoriteStoryModel(FavoriteStorytIdb);
});