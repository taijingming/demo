<template>
  <div class="mygoods21">
    <div class="box" v-for="(item, index) in img2" :key="index">
      <div v-if="img2[index].Cid == 1">
        <img :src="img2[index].img" alt />
        <a href="#">{{ img2[index].Gname }}</a>
        <a href="#"><span>￥</span>{{ img2[index].price }}</a>
        <!-- <a href="#">{{img1[0].add}}</a> -->
      </div>
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
      //       "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
      //     title: "蔓生",
      //     pri: "￥198/454g",
      //     add: "加入购物车",
      //   },
      //   {
      //     pic:
      //       "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
      //     title: "蔓生",
      //     pri: "￥198/454g",
      //     add: "加入购物车",
      //   },
      //   {
      //     pic:
      //       "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
      //     title: "蔓生",
      //     pri: "￥198/454g",
      //     add: "加入购物车",
      //   },
      //   {
      //     pic:
      //       "https://static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg",
      //     title: "蔓生",
      //     pri: "￥198/454g",
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

.mygoods21 {
  width: 1280px;
  /* height: 346px; */
  display: flex;
  margin-left: 10px;
  flex-wrap: wrap;
}
.box {
  margin: 0 10px 0 40px;
  width: 230px;
}
.mygoods21 a {
  display: block;
  text-align: center;
}
img {
  width: 228px;
  height: 246px;
}
</style>