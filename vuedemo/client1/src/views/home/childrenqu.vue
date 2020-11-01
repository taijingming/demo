<template>
  <div class="birthbox-top">
    <div class="birthbox">
      <img :src="chiimg" alt="" />
      <div class="birth1">
        <h2>儿童</h2>
        <i></i>
      </div>
      <comm :data2="3"></comm>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chiimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/a85037c288546b3c691192dfad2bb16a.jpg",
    };
  },
  components: {
    comm: () => import("@/views/home/comm.vue"),
  },
};
</script>
<style scoped="scoped">
.birthbox-top {
  margin-top: 100px;
}
.birthbox {
  width: 1200px;
  margin: 0 auto;
}
.birthbox img {
  width: 1200px;
  height: 400px;
}

.birth1 h2 {
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
.birth1 i {
  display: block;
  width: 28px;
  height: 2px;
  background: #e6c5b8;
  margin: 8px auto 14px;
}
</style>