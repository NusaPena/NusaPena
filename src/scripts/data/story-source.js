import API_ENDPOINT from "../globals/api-endpoint";

class StorySource {
	static async getStoryList() {
          try {
               const response = await fetch(API_ENDPOINT.STORY_LIST);
               const responseJson = await response.json();
                    console.log("Response JSON: ", responseJson);
                    if (responseJson.error) {
                         console.error("Error fetching stories: ", responseJson.message);
                         return [];
                    }

               return responseJson.stories;
          } catch (error) {
               console.error("Failed to fetch story list: ", error);
               return [];
          }
     }

     static async getStoryDetails(id) {
          try {
               const response = await fetch(`${API_ENDPOINT.STORY_DETAILS}/${id}`);
               const responseJson = await response.json();
                    console.log("Response JSON: ", responseJson);
                    if (responseJson.error) {
                         console.error("Error fetching story details: ", responseJson.message);
                         return [];
                    }

               return responseJson.story;
          } catch (error) {
               console.error("Failed to fetch story details: ", error);
               return [];
          }
     }
}

export default StorySource;
