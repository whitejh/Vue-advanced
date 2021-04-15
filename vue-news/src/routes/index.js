import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  // router는 라우터의 정보들을 관리하는 VueRouter 객체
  // 객체 내용들이 router에 담김
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news', //redirect는 페이지 열자마자 특정페이지로 나타냄
    },
    {
      // path : url 주소
      path: '/news',
      // component : url 주소로 갔을 떄 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/item',
      component: ItemView,
    },
    {
      path: '/user',
      component: UserView,
    },
  ],
});
// router라는 변수 안에 VueRouter에 대한 정보를 담음
