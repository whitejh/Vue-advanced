<!-- > views 폴더엔 페이지에 대한 라우팅 정보만 들어가야 한다 < -->
<template>
  <div>
    Ask
    <p v-for="ask in askItems" v-bind:key="ask">
      <a :href="ask.url">{{ ask.title }} </a>
      <small>{{ ask.time_ago }} by {{ ask.user }} </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
