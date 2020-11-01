<template>
  <div class="mygoods2">
    <div class="box" v-for="(item, index) in img2" :key="index">
      <template v-if="img2[index].Cid == 2">
        <img :src="img2[index].img" alt />
        <a href="#">{{ img2[index].Gname }}</a>
        <a href="#">￥{{ img2[index].price }}</a>
        <!-- <a href="#">{{ img1[0].add }}</a> -->
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img1: [
      //   {
      //     pic:
      //       "https://static.21cake.com//upload/images/4f206035ab1f8d8a4c55a4e335769e82.jpg",
      //     title: "柚子冰淇淋",
      //     pri: "￥45/一盒",
      //     add: "加入购物车",
      //   },

      // ],
      img2: [],
    };
  },
  mounted() {
    let getImages = (_url) => {
      if (_url !== undefined) {
        let _u = _url.substring(8); //https就是8
        return "https://images.weserv.nl/?url=" + _u;
      }
    };
    this.$axios.get("/home").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        console.log(getImages(res.data[i].img));
        res.data[i].img = getImages(res.data[i].img);
      }
      this.img2 = res.data;
    });
  },
};
</script>

<style scoped="scoped">
a {
  text-decoration: none;
  font-size: 13px;
}

.mygoods2 {
  padding: 10px;
  width: 1280px;
  display: flex;
  margin-left: 10px;
  flex-wrap: wrap;
}
.mygoods2 .box {
  margin: 0 10px 0 40px;
  width: 228px;
}
.mygoods2 a {
  display: block;
  text-align: center;
}
img {
  width: 228px;
  height: 246px;
}
</style>