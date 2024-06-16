import { openDB } from "idb";
import CONFIG from "../globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const databasePromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const FavoriteStoryIdb = {
  async getStoryData(id) {
    return (await databasePromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllStory() {
    return (await databasePromise).getAll(OBJECT_STORE_NAME);
  },
  async putStory(story) {
    if (!story.hasOwnProperty("id")) {
      return;
    }
    return (await databasePromise).put(OBJECT_STORE_NAME, story);
  },
  async deleteStory(id) {
    return (await databasePromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchStories(query) {
    const stories = await this.getAllStory();
    return stories.filter((story) => story.title.toLowerCase().includes(query.toLowerCase()));
  },
};

export default FavoriteStoryIdb;
