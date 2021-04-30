<template>
  <div>
    Ask
    <div v-for="item in ask" v-bind:key="item">{{ item.title }}</div>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.ask = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped></style>
