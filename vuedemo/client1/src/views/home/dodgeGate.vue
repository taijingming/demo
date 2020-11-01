<template>
  <div class="dodgegate">
    <router-link to="/dodgegate">
      <img :src="dogimg" alt="" />
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dogimg:
        "https://images.weserv.nl/?url=static.21cake.com//upload/images/810af7fb1f079477c8aec960d11fa4df.jpg",
    };
  },
};
</script>

<style scoped>
.dodgegate {
  margin-top: 30px;
}
.dodgegate img {
  width: 542px;
  height: 253px;
  border-radius: 10px;
}
</style>