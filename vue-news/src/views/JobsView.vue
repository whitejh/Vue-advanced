<!-- > views 폴더엔 페이지에 대한 라우팅 정보만 들어가야 한다 < -->
<template>
  <div>
    Jobs
    <div v-for="job in this.$store.state.jobs" v-bind:key="job">{{ job.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style scoped></style>
