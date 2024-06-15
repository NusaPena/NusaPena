import "../src/scripts/components/story-list";
import "../src/scripts/components/story-item";

describe("Displaying favorite stories", () => {
  const storyData = [
    {
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
    },
    {
      id: "sgekvvogavmpgfme1",
      title: "Jaka Tingkir",
      category: "Sage",
      origin: "Jawa Tengah",
            imageId: "201",
            storyDesc: [
              "Pada zaman dahulu kala, di sebuah desa kecil di Jawa Tengah, hiduplah seorang pemuda yang bernama Jaka Tingkir. Jaka Tingkir adalah seorang pemuda yang gagah berani dan memiliki kekuatan yang luar biasa.",
        ].join(""),
         morals: [
              "Cerita Jaka Tingkir mengajarkan kita tentang pentingnya <strong>keberanian</strong>, <strong>kerja keras</strong>, dan <strong>kesetiaan</strong>. Dengan sikap yang <strong>baik</strong> dan hati yang <strong>tulus</strong>, kita bisa mencapai hal-hal besar dan menjadi sosok yang dihormati serta dicintai oleh banyak orang.",
        ].join(""),
         synopsis: [
              "Jaka Tingkir merantau ke Pajang untuk mencari ilmu. Di sana, ia melawan seekor banteng yang sedang mengamuk. Karena keberaniannya ia menjadi sosok yang dihormati di kerajaan Pajang.",
        ].join(""),
    },
  ];

  beforeEach(() => {
    document.body.innerHTML = "<story-list></story-list>";
  });

  describe("When story list is empty", () => {
    it("Should show empty data information", () => {
      const storytListElement = document.querySelector("story-list");
      storytListElement.setStoryList([]);

      expect(document.querySelector(".message")).toBeTruthy();
    });
  });

  describe("When story list is not empty", () => {
    it("Should show all story item", () => {
      const storytListElement = document.querySelector("story-list");
      storytListElement.setStoryList(storyData);

      const storyItemElement = document.querySelectorAll("story-item");
      const storyItemData = Array.from(storyItemElement).map((item) => item.getStoryItem());

      expect(storyItemData).toEqual(storyData);
    });
  });
});