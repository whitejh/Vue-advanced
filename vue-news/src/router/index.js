import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  // router는 라우터의 정보들을 관리하는 VueRouter 객체
  // 객체 내용들이 router에 담김
  mode: 'history', // url에 #(해시값) 제거
  routes: [
    {
      path: '/',
      redirect: '/news', //redirect는 페이지 열자마자 특정페이지로 나타냄
    },
    {
      // path : url 주소 (url 값)
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
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
// router라는 변수 안에 VueRouter에 대한 정보를 담음
