<template>
  <div class="newbox-top">
    <div class="newbox">
      <img :src="newimg" alt="" />
      <div class="new1">
        <h2>新品</h2>
        <i></i>
      </div>
      <comm :data2="1"></comm>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/83db96358514ac6ecade4f142c2c5750.jpg",
    };
  },
  components: {
    comm: () => import("@/views/home/comm.vue"),
  },
};
</script>
<style scoped>
.newbox-top {
  margin-top: 100px;
}
.newbox {
  width: 1200px;
  margin: 0 auto;
}
.newbox img {
  width: 1200px;
  height: 400px;
}
.new1 h2 {
  display: flex;
  font-size: 24px;
  color: #684029;
  font-weight: normal;
  margin: 50px 40px 0;
  justify-content: center;
}
i {
  font-style: italic;
}
.new1 i {
  display: block;
  width: 28px;
  height: 2px;
  background: #e6c5b8;
  margin: 8px auto 14px;
}
</style>