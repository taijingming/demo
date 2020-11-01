<template>
  <div class="winter2">
    <div class="winterbox">
      <div class="winterbox-nav">
        <h2>廿一志秋刊·客服Q&A</h2>
        <p>发布时间：2018-09-19</p>
      </div>
      <div class="winterimg1">
        <img :src="winterimg3" alt="" />
        <img :src="winterimg4" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      winterimg3:
        "https://images.weserv.nl/?url=static.21cake.com/public/images/c6/25/2a/1b21b0f279a117b242c09ac2807f7d43.jpg",
      winterimg4:
        "https://images.weserv.nl/?url=static.21cake.com/public/images/9d/00/71/e549bb1bfbee240ceacfe6b0ff379e66.jpg",
    };
  },
  components: {
    buttompart: () => import("@/views/buttompart.vue"),
  },
};
</script>
<style scoped="scoped">
.winter2 {
  margin-top: 100px;
}
.winterbox {
  width: 1200px;
  margin: 70px auto;
}
.winterbox-nav {
  width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  background: #fff;
  padding-bottom: 10px;
  color: #8c8c8c;
  border-bottom: 1px #eee solid;
}
.winterbox-nav h2 {
  color: #684029;
  font-weight: normal;
}
.winterimg1 img {
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
}
</style>