const assert = require("assert");

Feature("Liking and Unliking Story");

Before(({ I }) => {
    I.amOnPage("/#/favorite");
  });

Scenario("showing empty liked stories", ({ I }) => {
  I.see("Daftar Cerita Kosong!", ".message");
});

Scenario("liking one story", async ({ I }) => {
    I.see("Daftar Cerita Kosong!", ".message");

    I.amOnPage("/#/explore");

    I.seeElement("story-item .item-title");
    const firstStory = locate("story-item .item-title").first();
    const firstStoryTitle = await I.grabTextFrom(firstStory);
    I.click(firstStory);

    I.seeElement("#like");
    I.click("#like");

    I.amOnPage("/#/favorite");
    I.seeElement("story-item");
    const likedStoryTitle = await I.grabTextFrom(".item-title");

    assert.strictEqual(firstStoryTitle, likedStoryTitle);
  });

Scenario("Unliking Story", async ({ I }) => {
    I.see("Daftar Cerita Kosong!", ".message");

    I.amOnPage("/#/explore");

    I.seeElement("story-item .item-title");
    const firstStory = locate("story-item .item-title").first();
    const firstStoryTitle = await I.grabTextFrom(firstStory);
    I.click(firstStory);

    I.seeElement("#like");
    I.click("#like");

    I.amOnPage("/#/favorite");
    I.seeElement("story-item");
    const likedStoryTitle = await I.grabTextFrom(".item-title");
    assert.strictEqual(firstStoryTitle, likedStoryTitle);

    I.click(firstStory);

    I.seeElement("#unlike");
    I.click("#unlike");

    I.amOnPage("/#/favorite");
    I.see("Daftar Cerita Kosong!", ".message");
  });
