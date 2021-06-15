<!-- > views 폴더엔 페이지에 대한 라우팅 정보만 들어가야 한다 < -->
<template>
  <div>
    News
    <p v-for="item in this.$store.state.news" v-bind:key="item">
      <a :href="item.url">{{ item.title }} </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }} </router-link>
        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }} </router-link> -->
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style scoped></style>
