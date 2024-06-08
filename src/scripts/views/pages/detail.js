import UrlParser from "../../routes/url-parser";
import StoryDetailHandler from "../../utils/story-detail-handler";

const Detail = {
  async render() {
    return `
    <story-detail></story-detail>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    await StoryDetailHandler.updateStoryDetails(url.id);
  },
};

export default Detail;
