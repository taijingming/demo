<template>
  <div class="winter1">
    <div class="winterbox">
      <div class="winterbox-nav">
        <h2>冬季刊·进博会</h2>
        <p>发布时间：2018-11-23</p>
      </div>
      <div class="winterimg1">
        <img :src="winterimg1" alt="" />
        <img :src="winterimg2" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      winterimg1:
        "https://images.weserv.nl/?url=static.21cake.com/public/images/a0/3e/30/09d7c70031b259bb42b70b043635be95.jpg",
      winterimg2:
        "https://images.weserv.nl/?url=static.21cake.com/public/images/9f/4c/7f/adf228f7326c109a76ccab503ce6b4ce.jpg",
    };
  },
  components: {
    buttompart: () => import("@/views/buttompart.vue"),
  },
};
</script>
<style scoped="scoped">
.winter1 {
  margin-top: 100px;
}
.winterbox {
  width: 1200px;
  margin: 70px auto;
}
.winterbox-nav {
  width: 1200px;
  /* margin: 0 auto; */
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