<template>
  <div id="app">
    <ToolBar></ToolBar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

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
#app {
}
</style>
