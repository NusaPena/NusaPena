import "../src/scripts/components/story-detail";
import StoryDetailManager from "../src/scripts/utils/story-detail-handler";
import FavoriteStoryIdb from "../src/scripts/data/favorite-story-idb";

describe("Unliking A Restaurant", () => {
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

      beforeEach(async () => {
        window.scrollTo = jest.fn();

        document.body.innerHTML = "<story-detail></story-detail>";
        document.querySelector("story-detail").setStoryDetails(story);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

    it("should show unlike widget when the story is already liked", async () => {
        document.querySelector("story-detail").setAttribute("favorite", "true");

        expect(document.querySelector("#unlike")).toBeTruthy;
    });

    it("should not display like widget when the story is already liked", async () => {
        document.querySelector("story-detail").setAttribute("favorite", "true");

        expect(document.querySelector("#like")).toBeFalsy;
    });

    it("should be able to remove liked story from favorite list", async () => {
        document.querySelector("story-detail").setAttribute("favorite", "true");

        StoryDetailManager.toggleFavoriteButton(story.id);
        document.querySelector("#unlike").dispatchEvent(new Event("click"));

        expect(document.querySelector("#like")).toBeTruthy;
    });

    it("should not throw error when user click unlike widget if the disliked story is not in the list", async () => {
        document.querySelector("story-detail").setAttribute("favorite", "true");

        StoryDetailManager.toggleFavoriteButton(story.id);
        await FavoriteStoryIdb.deleteStory(story.id);
        document.querySelector("#unlike").dispatchEvent(new Event("click"));

        expect(await FavoriteStoryIdb.getStoryData(story.id)).toBeUndefined();
    });
});