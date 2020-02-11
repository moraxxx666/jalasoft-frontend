import config from "./config";

class StoryServices {
  async CreateStory(story) {
    const res = await fetch(`${config.backend}api/story`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(story)
    });
    return res;
  }
  async SelectStory(id) {
    const res = await fetch(`${config.backend}api/story/${id}`);
    return res;
  }
  async AddVote(id,vote){
    const res = await fetch(`${config.backend}api/vote/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vote)
    });
    return res;
  }
  async GetVotes(id){
    const res = await fetch(`${config.backend}api/vote/${id}`)
    return res;
  }
}
const storyservice = new StoryServices();
export default storyservice;
