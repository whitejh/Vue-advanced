<!-- > views 폴더엔 페이지에 대한 라우팅 정보만 들어가야 한다 < -->
<template>
  <div>
    Jobs
    <p v-for="job in this.$store.state.jobs" v-bind:key="job">
      <a :href="job.url">{{ job.title }} </a>
      <small>{{ job.time_ago }} by {{ job.domain }} </small>
    </p>
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
