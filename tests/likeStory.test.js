import "../src/scripts/components/story-detail";
import StoryDetailHandler from "../src/scripts/utils/story-detail-handler";
import FavoriteStoryIdb from "../src/scripts/data/favorite-story-idb";

describe("Liking A Story", () => {
    const story = {
        id: "fbsyg3fuveznhnt3",
        title: "Si Kancil dan Buaya",
        category: "Fabel",
        origin: "Nusantara",
              imageId: "100",
        storyDesc: ["Pada suatu hari yang cerah, di sebuah hutan yang rindang, hiduplah seekor kancil kecil yang cerdik bernama Kancil. Kancil suka berpetualang di hutan, mencari makan dan bermain dengan teman-temannya.",
        ].join(""),
        morals: [
          "Cerita ini mengajarkan kita bahwa <strong>kecerdikan</strong> dan <strong>pikiran</strong> yang cerdas bisa mengatasi segala tantangan. Kancil yang kecil dan lemah bisa menipu buaya-buaya yang besar dan kuat dengan kepintarannya.",
        ].join(""),
        synopsis: [
              "Suatu hari, Kancil yang cerdik merasa haus. Untuk minum air sungai yang dijaga buaya, Kancil menipu buaya dengan berpura-pura menghitung mereka.",
        ].join(""),
      };

      const storyWithoutId = {
        title: "Si Kancil dan Buaya",
        category: "Fabel",
        origin: "Nusantara",
              imageId: "100",
        storyDesc: ["Pada suatu hari yang cerah, di sebuah hutan yang rindang, hiduplah seekor kancil kecil yang cerdik bernama Kancil. Kancil suka berpetualang di hutan, mencari makan dan bermain dengan teman-temannya.",
        ].join(""),
        morals: [
          "Cerita ini mengajarkan kita bahwa <strong>kecerdikan</strong> dan <strong>pikiran</strong> yang cerdas bisa mengatasi segala tantangan. Kancil yang kecil dan lemah bisa menipu buaya-buaya yang besar dan kuat dengan kepintarannya.",
        ].join(""),
        synopsis: [
              "Suatu hari, Kancil yang cerdik merasa haus. Untuk minum air sungai yang dijaga buaya, Kancil menipu buaya dengan berpura-pura menghitung mereka.",
        ].join(""),
      };

      beforeEach(() => {
        window.scrollTo = jest.fn();

        document.body.innerHTML = "<story-detail></story-detail>";
        document.querySelector("story-detail").setStoryDetails(story);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

    it("should show the like widget if the story is not yet liked", async () => {
        document.querySelector("story-detail").setAttribute("favorite", "false");

        expect(document.querySelector("#like")).toBeTruthy;
    });

    it("should not show the unlike widget if the story is not yet liked", async () => {
        document.querySelector("story-detail").setAttribute("favorite", "false");

        expect(document.querySelector("#unlike")).toBeFalsy;
    });

    it("should be able to like the story", async () => {
        document.querySelector("story-detail").setAttribute("favorite", "false");

        StoryDetailHandler.toggleFavoriteButton(story.id);
        document.querySelector("#like").dispatchEvent(new Event("click"));

        expect(document.querySelector("#unlike")).toBeTruthy;
    });

    it("should hide the like widget after the story is liked", () => {
      document.querySelector("story-detail").setAttribute("favorite", "false");
      StoryDetailHandler.toggleFavoriteButton(story.id);

      document.querySelector("#like").dispatchEvent(new Event("click"));
      expect(document.querySelector("#like")).toBeFalsy();
    });

    it("should add story to favorite after the like is clicked", async () => {
      document.querySelector("story-detail").setAttribute("favorite", "false");
      StoryDetailHandler.toggleFavoriteButton(story);

      document.querySelector("#like").dispatchEvent(new Event("click"));
      expect(await FavoriteStoryIdb.getStoryData(story.id)).toEqual(story);
    });

    it("should not throw error when add a story again when its already in favorite", async () => {
      await FavoriteStoryIdb.putStory(story);
      document.querySelector("story-detail").setAttribute("favorite", "false");
      StoryDetailHandler.toggleFavoriteButton(story.id);

      document.querySelector("#like").dispatchEvent(new Event("click"));
      expect(await FavoriteStoryIdb.getStoryData(story.id)).toEqual(story);
    });

    it("should not add a story when it has no id", async () => {
      document.querySelector("story-detail").setStoryDetails(storyWithoutId);
      StoryDetailHandler.toggleFavoriteButton(storyWithoutId);

      document.querySelector("#like").dispatchEvent(new Event("click"));
      expect(await FavoriteStoryIdb.getAllStory()).not.toContain(storyWithoutId);
  });
});