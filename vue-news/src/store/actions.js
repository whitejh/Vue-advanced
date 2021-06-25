import { 
  fetchNewsList,
  fetchJobsList,
  fetchAskList, 
  fetchUserInfo,
  fetchCommentItem,
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);//SET_NEWS에 response.data를 넘겨준다
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) { // destructuring 문법 적용(https://joshua1988.github.io/vue-camp/es6/destructuring.html#%ED%8A%B9%EC%A0%95-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EA%B0%92%EC%9D%84-%EA%BA%BC%EB%82%B4%EC%98%A4%EB%8A%94-%EB%B0%A9%EB%B2%95)
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {  // destructuring 문법 적용
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_USER ({commit}, name) {
    fetchUserInfo(name)
    .then(({ data }) => {
      commit('SET_USER', data);
    })
    .catch((error) => console.log(error));
  },
  FETCH_ITEM ({commit}, id) {
    fetchCommentItem(id)
    .then(({ data }) => {
      commit('SET_ITEM', data);
    })
    .catch((error) => console.log(error));
  },
};
