<template>
  <div class="goods">
    <div class="box" v-for="(item, index) in img1" :key="index">
      <img :src="item.pic" alt />
      <a href="#">{{ img1[0].title }}</a>
      <a href="#">{{ img1[0].pri }}</a>
      <a href="#">{{ img1[0].add }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: [
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/81e3bc59f425c7588a9ae914e0065c97.jpg",
          title: "奶羹和雪酪（原味奶羹+蓝莓雪酪）",
          pri: "￥25/一份",
          add: "加入购物车",
        },
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/81e3bc59f425c7588a9ae914e0065c97.jpg",
          title: "奶羹和雪酪（原味奶羹+蓝莓雪酪）",
          pri: "￥25/一份",
          add: "加入购物车",
        },
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/81e3bc59f425c7588a9ae914e0065c97.jpg",
          title: "奶羹和雪酪（原味奶羹+蓝莓雪酪）",
          pri: "￥25/一份",
          add: "加入购物车",
        },
        {
          pic:
            "https://images.weserv.nl/?url=static.21cake.com//upload/images/81e3bc59f425c7588a9ae914e0065c97.jpg",
          title: "奶羹和雪酪（原味奶羹+蓝莓雪酪）",
          pri: "￥25/一份",
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

.goods {
  width: 228px;
  height: 346px;
  display: flex;
  margin-left: 10px;
}
.box {
  margin: 0 10px 0 40px;
}
.goods a {
  display: block;
  text-align: center;
}
img {
  width: 228px;
  height: 246px;
}
</style>