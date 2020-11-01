<template>
  <div class="dingzhi_box">
    <div class="left_dingzhi">
      <p class="p1">企业订制 大磅黑白巧克力慕斯（可撒粉）</p>
      <p class="p2" v-for="(el, index) in text" :key="index">{{ el }}</p>
    </div>
    <div class="right_dingzhi">
      <div class="pkb">
        <span class="price">{{ price }}</span>
        <span class="kg">{{ kg }}</span>
        <span class="kg">{{ bang }}</span>
      </div>
      <div class="cakeMessage">
        <span v-for="(el, index) in cakeMessage" :key="index">{{ el }}</span>
      </div>
      <div class="time">
        <p>{{ time }}</p>
      </div>
      <div class="guige">
        <span>商品规格</span>
        <button
          @click="updata(index)"
          class="guige_select"
          v-for="(el, index) in guige"
          :key="index"
        >
          {{ el }}
        </button>
      </div>
      <div class="shop_car">
        <button>立即购买</button>
        <button>加入购物车</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: [
        "把企业'蛋糕'做大！",
        "21cake黑白巧克力慕斯蛋糕",
        "目前可做到90磅订制（送庆典图案及企业logo撒粉裱花。）",
        "下单截止到2020年1月13日，正月十五后（2月8号后）恢复定制",
      ],
      price: "￥1500.00",
      kg: "/4540g",
      bang: "(10.0磅)",
      guige: ["4540g(10.0磅)", "9080g(20.0磅)", "13620g(30.0磅)", "更多磅数"],
      cakeMessage: ["约35x35", "适合30-40人享用", "含40套餐具"],
      time: "最早2020-09-30  18:30配送",
      isborder: false,
      border: true,
    };
  },
  methods: {
    updata(index) {
      if (index == 0) {
        this.price = "￥1500.00";
        this.kg = "/4540g";
        this.bang = "(10.0磅)";
        this.isborder = true;
        this.border = false;
      } else if (index == 1) {
        this.price = "￥3000.00";
        this.kg = "/9080g";
        this.bang = "(20.0磅)";
        this.isborder = true;
        this.border = false;
      } else if (index == 2) {
        this.price = "￥4500.00";
        this.kg = "/13620g";
        this.bang = "(30.0磅)";
        this.isborder = true;
        this.border = false;
      } else if (index == 3) {
        this.price = " ";
        this.kg = " ";
        this.bang = "";
        this.isborder = true;
        this.border = false;
      }
    },
  },
};
</script>
<style>
.left_dingzhi,
.right_dingzhi {
  width: 500px;
  height: 300px;
  display: inline-block;
  margin: 50px;
  color: #684029;
  font-size: 12px;
  padding-left: 30px;
}
.dingzhi_box {
  display: flex;
  justify-content: center;
}
.left_dingzhi .p1 {
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 20px;
}
.left_dingzhi .p2 {
  padding: 5px 0;
}
.pkb {
  color: #c69c6d;
  margin-bottom: 30px;
  margin-top: 20px;
}
.right_dingzhi .price {
  font-size: 24px;
}
.right_dingzhi div {
  margin-top: 15px;
}
.right_dingzhi .kg {
  font-size: 20px;
}
.cakeMessage span,
.time {
  padding-left: 10px;
}
.guige span {
  padding-left: 5px;
  margin-right: 10px;
}
.guige .guige_select {
  display: inline-block;
  width: 90px;
  height: 38px;
  border: 1px solid #e7e0dd;
  line-height: 18px;
  text-align: center;
  background-color: #ffffff;
  outline: none;
  color: #684029;
  font-size: 12px;
  border-radius: 5px;
}
.shop_car button {
  width: 167px;
  height: 30px;
  background-color: #684029;
  color: white;
  margin-left: 10px;
  outline: none;
  border: none;
}
</style>