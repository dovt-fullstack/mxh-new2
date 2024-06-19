import http from '~/utils/http';
import { STORY } from '~/constants/story.constant';
import { StoryResponse, StoryNoId } from '~/@types/story';

class StoryApi {
  fetchAllStory() {
    return http.get<StoryResponse>(STORY.LIST)
  }

  addNewStory(story: StoryNoId) {
    return http.post<StoryResponse>(STORY.ADD, story);
  }

  deleteStory(id: number | string) {
    return http.delete<StoryResponse>(`${STORY.DELETE}/${id}`);
  }

  updateStory(id: number | string, story: StoryNoId) {
    return http.put<StoryResponse>(`${STORY.UPDATE}/${id}`, story);
  }

  StoryDetail(id: number | string) {
    return http.get<StoryResponse>(`${STORY.DETAIL}/${id}`);
  }
}

export default new StoryApi();
