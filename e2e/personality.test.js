Feature("Personality Test");

Before(({ I }) => {
    I.amOnPage("/");
  });

Scenario("liking one story", async ({ I }) => {
    I.see("TEST SEKARANG", "#personality-button");
    I.click("#personality-button");

    I.see("Bagaimana cara kamu menghadapi masalah yang sulit dan membutuhkan kecerdikan?", "#question");
    I.seeElement(".option");
    I.click(".option");

    I.seeElement(".next");
    I.click(".next");

    I.see("Bagaimana kamu menunjukkan kesabaran saat menghadapi masalah yang berkepanjangan?", "#question");
    I.seeElement(".option");
    I.click(".option");

    I.seeElement(".next");
    I.click(".next");

    I.see("Apa yang kamu lakukan ketika menghadapi tantangan besar dalam hidup?", "#question");
    I.seeElement(".option");
    I.click(".option");

    I.seeElement(".next");
    I.click(".next");

    I.see("Bagaimana kamu menunjukkan kesetiaanmu dalam hubungan atau pekerjaan?", "#question");
    I.seeElement(".option");
    I.click(".option");

    I.seeElement(".next");
    I.click(".next");

    I.see("Bagaimana kamu menunjukkan keberanianmu saat menghadapi tantangan?", "#question");
    I.seeElement(".option");
    I.click(".option");

    I.seeElement(".next");
    I.click(".next");

    I.see("Bagaimana kamu menghadapi orang yang selalu memperlakukanmu dengan tidak baik?", "#question");
    I.seeElement(".option");
    I.click(".option");

    I.seeElement(".next");
    I.click(".next");

    I.see("Bagaimana kamu menunjukkan kasih sayang kepada orang yang kamu cintai?", "#question");
    I.seeElement(".option");
    I.click(".option");

    I.seeElement(".next");

    I.seeElement(".result");
    // const firstStory = locate("story-item .item-title").first();
    // const firstStoryTitle = await I.grabTextFrom(firstStory);
    // I.click(firstStory);

    // I.seeElement("#like");
    // I.click("#like");

    // I.amOnPage("/#/favorite");
    // I.seeElement("story-item");
    // const likedStoryTitle = await I.grabTextFrom(".item-title");

    // assert.strictEqual(firstStoryTitle, likedStoryTitle);
});
