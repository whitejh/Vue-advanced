<!-- > views 폴더엔 페이지에 대한 라우팅 정보만 들어가야 한다 < -->
<template>
  <div>
    <ul class="newslist">
      <li v-for="item in this.$store.state.news" v-bind:key="item" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text"
              >{{ item.user }}
            </router-link>
          </small>
        </div>
        <!-- <a :href="item.url">
        {{ item.title }} 
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }} </router-link>
      </small> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped>
.newslist {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
