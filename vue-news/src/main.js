import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // 뷰 인스턴스에 라우터 추가
}).$mount('#app');

// main.js는 애플리케이션의 설정들(플러그인, 라이브러리,구조)들을
// 파악할 수 있는 청사진이여야 한다.
