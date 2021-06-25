<!-- > views 폴더엔 페이지에 대한 라우팅 정보만 들어가야 한다 < -->
<template>
  <div>
    Ask
    <p v-for="item in askItems" v-bind:key="item">
    <!-- <p v-for="item in ask" v-bind:key="item"> -->
    <!-- <p v-for="item in this.$store.state.ask" v-bind:key="item"> -->
      <router-link v-bind:to="`item/${item.id}`">{{ item.title }} </router-link>
      <small>{{ item.time_ago }} by {{ item.user }} </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // 방법 #3
    ...mapGetters({
      askItems: 'fetchedAsk', // ...mapGetters(['fetchedAsk']),
    }),

    // 방법 #2
    // ...mapState({
    //   ask: state => state.ask // ['ask']
    // })

    // 방법 #1
    // ask() {}
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style scoped></style>


