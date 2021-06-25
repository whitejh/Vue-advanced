<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    ToolBar, // 파스칼 케이스 표기
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none; /* 링크에 밑줄 없앰 */
}
a:hover {
  color: #42b883; /* 마우스 올렸을 때 색깔 */
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline; /* 라우터 링크에 밑줄 생김 */
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
