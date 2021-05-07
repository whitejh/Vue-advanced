export default {
  SET_NEWS(state, news) {
    state.news = news; // actions에 있는 response.data가 news 인자로 넘어옴
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_USER(state, user) {
    state.user = user;
  }
};
