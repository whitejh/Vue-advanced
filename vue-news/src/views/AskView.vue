<!-- > views 폴더엔 페이지에 대한 라우팅 정보만 들어가야 한다 < -->
<template>
  <div>
    Ask
    <p v-for="item in askItems" v-bind:key="item">
      <router-link v-bind:to="`item/${item.id}`">{{ item.title }} </router-link>
      <small>{{ item.time_ago }} by {{ item.user }} </small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // #3
    ...mapGetters({
      askItems: 'fetchedAsk', // ['fetchedAsk']
    }),

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style scoped></style>
