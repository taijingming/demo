<template>
  <div class="dodegbox-top">
    <div class="dodegbox">
      <h2>新用户专享-2020</h2>
      <p>发布时间：2019-03-15</p>
      <img :src="dodegimg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dodegimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/20200603/c2253fb1e2fa8cf7b8251852cfffb756.jpg",
    };
  },
  components: {
    buttompart: () => import("@/views/buttompart.vue"),
  },
};
</script>
<style  scoped="scoped">
.dodegbox-top {
  margin-top: 100px;
}
.dodegbox {
  width: 1200px;
  margin: 0 auto;
  padding: 15px 15px 0;
  background: #fff;
}
.dodegbox h2 {
  font-size: 24px;
  line-height: 20px;
  color: #684029;
}
.dodegbox p {
  color: #8c8c8c;
  font-size: 12px;
}
.dodegbox img {
  width: 1200px;
  height: 768px;
}
</style>