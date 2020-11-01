<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">
      <div class="all-box">
        <p>{{ arr[index].title }}</p>
        <p class="p2">{{ arr[index].title2 }}</p>
      </div>

      <div class="mygoods2-box" v-for="(item, index) in img2" :key="index">
        <div>
          <img :src="img2[index].img" alt />
          <a href="#">{{ img2[index].Gname }}</a>
          <!-- <a class="a2" href="#">{{ img2[index].pri }}</a> -->
          <a class="a1" href="#" @click="fn()">{{ img2[index].price }}</a>
        </div>
      </div>
    </div>
    s

    <!-- <div class="mygoods2-box">
      <div class="box" v-for="(item,index) in img1" :key="index">
        <img :src="img1[0].pic" alt />
        <a href="#">{{img1[0].title}}</a>
        <a href="#">{{img1[0].pri}}</a>
        <a href="#">{{img1[0].add}}</a>
      </div>
    </div>-->
  </div>
</template>

<script scoped="scoped">
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
      arr: [
        {
          title: "蛋糕",
          title2: "新鲜乳脂奶油蛋糕",
          // id: 1,
        },
        {
          title: "+Gelato 10",
          title2: "10天生命的意式杰拉朵冰淇淋",
          // id: 2,
        },
        {
          title: "咖啡下午茶",
          title2: "挂耳咖啡",
          // id: 3,
        },
        {
          title: "常温咖啡",
          title2: "方便携带，恰到好处的满足",
          // id: 4,
        },
        {
          title: "礼品",
          title2: "设计师礼品专区",
          // id: 5,
        },
        {
          title: "季节性下线",
          title2: "在合适的季节，吃恰当的食物",
        },
      ],
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

<style>
.all-box {
  border-left: 3px solid rgb(104, 64, 41);
  padding-left: 10px;
  color: rgb(104, 64, 41);
  margin: 40px 0 0 565px;
}
.p2 {
  font-size: 12px;
}
.mygoods2-box {
  display: inline-block;
  text-align: center;
  margin-left: 60px;
}

.mygoods2-box a {
  display: block;
  color: #6c4630;
}
.mygoods2-box .a1 {
  margin-top: 15px;
}
.mygoods2-box .a2 {
  color: #e1b472;
}
</style>