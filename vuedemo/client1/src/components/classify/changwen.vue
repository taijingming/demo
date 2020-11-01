<template>
  <div class="mygoods2">
    <div class="box" v-for="(item, index) in img1" :key="index">
      <img :src="img1[0].pic" alt />
      <a href="#">{{ img1[0].title }}</a>
      <a href="#">{{ img1[0].pri }}</a>
      <a href="#">{{ img1[0].add }}</a>
    </div>
  </div>
</template>

<script scoped="scoped">
export default {
  data() {
    return {
      img1: [
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/be1df159b4d226180e99ce09194b7a41.jpg",
          title: "磅蛋糕切片（核桃）",
          pri: "￥8.00/30g（份）",
          add: "加入购物车",
        },
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/be1df159b4d226180e99ce09194b7a41.jpg",
          title: "磅蛋糕切片（核桃）",
          pri: "￥8.00/30g（份）",
          add: "加入购物车",
        },
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/be1df159b4d226180e99ce09194b7a41.jpg",
          title: "磅蛋糕切片（核桃）",
          pri: "￥8.00/30g（份）",
          add: "加入购物车",
        },
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/be1df159b4d226180e99ce09194b7a41.jpg",
          title: "磅蛋糕切片（核桃）",
          pri: "￥8.00/30g（份）",
          add: "加入购物车",
        },
      ],
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  font-size: 13px;
}

.mygoods2 {
  width: 228px;
  height: 346px;
  display: flex;
  margin-left: 10px;
}
.box {
  margin: 0 10px 0 40px;
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