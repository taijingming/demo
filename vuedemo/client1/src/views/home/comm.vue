<template>
  <div class="comm-top">
    <div class="comm" v-for="(it, index) in str1" :key="it.Gid">
      <div v-if="it.Cid == data2">
        <router-link to="" class="rout">
          <img :src="it.img" />
          <h4>{{ it.Gname }}</h4>
          <!-- |it.quality -->
          <p>￥{{ it.price }}</p>
          <!-- <p>{{arr[0].hot}}</p> -->
        </router-link>
        <div class="commt" @click="fn($event, index)">
          <span></span>
          <span @click="addGoods($event, it.Gid)">加入购物车</span>
        </div>
        <div class="addcomm" style="display: none">
          <p>成功添加购物车</p>
          <div @click="fn2()">查看购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str1: [],
      add: false,
      subs: -1,
    };
  },
  props: ["data2"],
  methods: {
    fn(e, index) {
      e.target.parentElement.nextElementSibling.style.display = "block";
      // this.add=!false
      setTimeout(() => {
        e.target.parentElement.nextElementSibling.style.display = "none";
      }, 3000);
    },
    fn2() {
      this.$router.push("/shopcar");
    },
    addGoods(e, Gid) {
      if (localStorage.isLogin == "true") {
        this.$axios
          .get("/addGoods", {
            params: {
              Gid,
            },
          })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        this.$router.push("login");
      }
    },
  },
  mounted() {
    let getImages = (_url) => {
      if (_url !== undefined) {
        let _u = _url.substring(8); //https就是8
        console.log("处理图片", "https://images.weserv.nl/?url=" + _u);
        return "https://images.weserv.nl/?url=" + _u;
      }
    };
    this.$axios.get("/home").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].img = getImages(res.data[i].img);
      }
      this.str1 = res.data;
    });
  },
};
</script>
<style scoped>
.comm-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.rout {
  text-decoration: none;
}
.comm {
  width: 228px;
  margin: 20px;
  position: relative;
}
.comm img {
  width: 228px;
  height: 246px;
}
.comm h4 {
  text-align: center;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: #684029;
}
.comm p {
  text-align: center;
  color: #bb9772;
  line-height: 18px;
  margin-top: 5px;
  font-size: 13px;
}
.comm h4:hover {
  color: #bb9772;
}
.commt {
  margin-top: 8px;
  text-align: center;
  color: #684029;
  font-size: 13px;
}
.commt span:hover {
  color: #bb9772;
}
.addcomm {
  width: 228px;
  height: 100px;
  background-color: darkgray;
  position: absolute;
  bottom: 0;
  padding: 20px 0;
  /* display: none; */
}
.addcomm p {
  color: #bb9772;
  font-size: 15px;
}
.addcomm div {
  text-align: center;
  background-color: #684029;
  color: white;
  width: 120px;
  height: 35px;
  line-height: 35px;
  margin: 10px auto;
}
</style>
