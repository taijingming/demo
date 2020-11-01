<template>
  <div class="newproduct">
    <router-link to="/newproduct">
      <img :src="newimg" alt="" />
    </router-link>
    <product :data1="1"></product>
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
    product: () => import("./product.vue"),
  },
};
</script>
<style scoped>
.newproduct {
  margin-top: 30px;
}
.newproduct img {
  width: 1100px;
  height: 250px;
}
</style>