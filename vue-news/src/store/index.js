// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex); //Vuex는 플러그인의 형태로 제공되어서 Vue.use로 Vuex 사용

export const store = new Vuex.Store({
  state: {
    news: [], // news라는 배열 안에 호출한 data(response.data)가 담기게 됨
    jobs: [],
    ask: [],
    user: {}, // 객체 하나
    item: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations: mutations, //앞 뒤 같으면 축약가능 -> mutations,
  actions: actions, //앞 뒤 같으면 축약가능 -> actions,
});
