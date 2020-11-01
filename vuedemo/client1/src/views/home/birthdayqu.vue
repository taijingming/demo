<template>
  <div class="birthbox-top">
    <div class="birthbox">
      <img :src="birthimg" alt="" />
      <div class="birth1">
        <h2>生日</h2>
        <i></i>
        <span>庆祝感甜点，赞叹生日、生命</span>
      </div>
      <comm :data2="2"></comm>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      birthimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/84f0375298ea7fe876ae1447c2911400.jpg",
    };
  },
  components: {
    comm: () => import("@/views/home/comm.vue"),
  },
};
</script>
<style  scoped="scoped">
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
.birth1 span {
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #684029;
}
</style>