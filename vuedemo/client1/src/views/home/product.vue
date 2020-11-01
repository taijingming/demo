<template>
  <div class="pro-top">
    <div class="product1" v-for="el in str" :key="el.Gid">
      <div v-if="el.Cid == '1'">
        <div v-if="el.Tid == data1" class="duct1">
          <router-link to="" class="pro1">
            <img :src="el.img" alt="" />
            <h4>{{ el.Gname }}</h4>
            <p>{{ el.description }}</p>
            <div class="dott">
              ￥{{ el.price }}(1.0磅)
              <span @click="addGoods($event, el.Gid)">加入购物车</span>
            </div>
            <div class="addcomm" style="display: none">
              <p>成功添加购物车</p>
              <div @click="fn2()">查看购物车</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str: [],

      //     arr:[{
      //        img:"https://static.21cake.com//upload/images/8e5930873714d422476417759b01e4b8.png",
      //        name:'蔓生',
      //        introduce:'树莓奶油与浆果慕斯蛋糕',
      //        new:"新品",
      //        price:'198.00'
      //    }]
    };
  },
  props: ["data1"],
  mounted() {
    let getImages = (_url) => {
      if (_url !== undefined) {
        let _u = _url.substring(8); //https就是8
        return "https://images.weserv.nl/?url=" + _u;
      }
    };
    this.$axios.get("/home").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        // console.log(getImages(res.data[i].img));
        res.data[i].img = getImages(res.data[i].img);
      }
      this.str = res.data;
    });
  },
  methods: {
    addGoods(e, Gid, index) {
      e.target.parentElement.nextElementSibling.style.display = "block";
      setTimeout(() => {
        e.target.parentElement.nextElementSibling.style.display = "none";
      }, 3000);
      if (localStorage.isLogin == "true") {
        this.$axios
          .get("/addGoods", {
            params: {
              Gid,
            },
          })
          .then((res) => {
            // console.log(res.data);
          });
      } else {
        this.$router.push("login");
      }
    },
    fn2() {
      this.$router.push("/shopcar");
    },
  },
};
</script>
<style scoped>
.pro-top {
  width: 1100px;
  display: flex;
  /* padding: 0 20px; */
  justify-content: flex-start;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.pro1 {
  text-decoration: none;
}
.product1 {
  margin-top: 20px;
  /* width: 260px;
       height: 365px;
       padding: 0  0 6px; */
  /* padding:0 12px; */
  position: relative;
}
.duct1 {
  margin: 0 0 0 10px;
}
.product1 img {
  width: 255px;
  height: 230px;
  background-color: #fafafa;
  border-radius: 5px;
}
.product1 h4 {
  color: #000;
  font-weight: normal;
  padding: 12px 0 0;
}
.product1 p:first-of-type {
  color: #616161;
  font-size: 14px;
  padding: 12px 0;
}
.dott {
  width: 263px;
  border-top: 1px dotted #b0986f;
  padding-top: 12px;
  color: #bb9772;
  font-size: 14px;
  margin-top: 12px;
}
.product1 span {
  width: 80px;
  height: 20px;
  background-color: #684029;
  color: #fff;
  font-size: 12px;
  margin-left: 92px;
}
.addcomm {
  width: 240px;
  height: 100px;
  background-color: darkgray;
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  /* display: none; */
}
.addcomm p {
  color: #bb9772;
  font-size: 15px;
  text-align: center;
}
.addcomm div {
  text-align: center;
  background-color: #684029;
  color: white;
  width: 120px;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
  margin-bottom: 5px;
}
</style>