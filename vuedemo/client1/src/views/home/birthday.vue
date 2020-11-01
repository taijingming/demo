<template>
  <div class="birthday">
    <router-link to="/birthday">
      <img :src="biyimg" alt="" />
    </router-link>
    <product :data1="2"></product>
  </div>
</template>
<script>
export default {
  data() {
    return {
      biyimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/84f0375298ea7fe876ae1447c2911400.jpg",
    };
  },
  components: {
    product: () => import("./product.vue"),
  },
};
</script>
<style scoped>
.birthday {
  margin-top: 30px;
}
.birthday img {
  width: 1100px;
  height: 250;
}
</style>