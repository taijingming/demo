<template>
  <div class="childern">
    <router-link to="/children">
      <img :src="chhiimg" alt="" />
    </router-link>
    <product :data1="3"></product>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chhiimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/a85037c288546b3c691192dfad2bb16a.jpg",
    };
  },
  components: {
    product: () => import("./product.vue"),
  },
};
</script>
<style scoped>
.childern {
  margin-top: 30px;
}
.childern img {
  width: 1100px;
  height: 250px;
}
</style>