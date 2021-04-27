<template>
  <div>
    Jobs
    <div v-for="job in jobs" v-bind:key="job">{{ job.title }}</div>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => (this.jobs = response.data))
      .catch((error) => console.log(error));

    // fetchJobsList()
    //   .then(function(response) {
    //     vm.jobs = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style scoped></style>
