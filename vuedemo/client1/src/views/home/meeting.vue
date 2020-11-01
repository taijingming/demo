<template>
  <div class="meeting">
    <router-link to="/meeting">
      <img :src="meeimg" alt="" />
    </router-link>
    <product :data1="4"></product>
  </div>
</template>
<script>
export default {
  data() {
    return {
      meeimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/4f5fdcf4d2b26b0400372f90b8fac191.jpg",
    };
  },
  components: {
    product: () => import("./product.vue"),
  },
};
</script>
<style scoped>
.meeting {
  margin-top: 30px;
}
.meeting img {
  width: 1100px;
  height: 250px;
}
</style>