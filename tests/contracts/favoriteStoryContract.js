const itActsAsfavoriteStoryModel = (favoriteStory) => {
	it("should retrieve the stories that has been added", async () => {
		favoriteStory.putStory({ id: 1 });
		favoriteStory.putStory({ id: 2 });

		expect(await favoriteStory.getStoryData(1)).toEqual({ id: 1 });
		expect(await favoriteStory.getStoryData(2)).toEqual({ id: 2 });
		expect(await favoriteStory.getStoryData(3)).toEqual(undefined);
	});

	it("should reject a story from being added if it does not have the correct property", async () => {
		favoriteStory.putStory({  aProperty: "property" });

		expect(await favoriteStory.getAllStory()).toEqual([]);
	});

	it("can retrieve all the added stories", async () => {
		favoriteStory.putStory({ id: 1 });
		favoriteStory.putStory({ id: 2 });

		expect(await favoriteStory.getAllStory()).toEqual([{ id: 1 }, { id: 2 }]);
	});

	it("should remove favorite story", async () => {
		favoriteStory.putStory({ id: 1 });
		favoriteStory.putStory({ id: 2 });
		favoriteStory.putStory({ id: 3 });

		await favoriteStory.deleteStory(1);

		expect(await favoriteStory.getAllStory()).toEqual([{ id: 2 }, { id: 3 }]);
	});

	it("should manage request to remove a story even if the story hasn't been added", async () => {
		favoriteStory.putStory({ id: 1 });
		favoriteStory.putStory({ id: 2 });
		favoriteStory.putStory({ id: 3 });

		await favoriteStory.deleteStory(4);

		expect(await favoriteStory.getStoryData(4)).toBeUndefined();
		expect(await favoriteStory.getAllStory()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
	});
};

export default itActsAsfavoriteStoryModel;