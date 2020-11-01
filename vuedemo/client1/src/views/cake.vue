<template>
  <div class="classify">
    <div class="box1">
      <div class="item1">分类：</div>
      <div class="item3 item2" @click="all1()">
        <p>全部分类</p>
      </div>
      <div class="item2" @click="cake()">蛋糕</div>
      <div class="item2" @click="ice()">冰淇淋</div>
      <div class="item2" @click="tea()">咖啡下午茶</div>
      <div class="item2" @click="chang()">常温蛋糕</div>
      <div class="item2" @click="lip()">设计师礼品</div>
      <div class="item2" @click="hubg()">面包</div>
    </div>
    <div class="box2">
      <div class="item1">口味：</div>
      <div class="item3 item2">全部口味</div>
      <div class="item2">乳脂奶油</div>
      <div class="item2">慕斯</div>
      <div class="item2">乳酪</div>
      <div class="item2">巧克力</div>
      <div class="item2">坚果</div>
      <div class="item2">水果</div>
      <div class="item2">咖啡</div>
      <div class="item2">冰淇淋</div>
      <div class="item2">应季</div>
    </div>
    <myall v-show="all2"></myall>
    <mycake v-show="flag"></mycake>
    <myice v-show="ok"></myice>
    <mytea v-show="coffeetea"></mytea>
    <changwen v-show="dangao"></changwen>
    <gift v-show="lipin"></gift>
    <mianbao v-show="hub"></mianbao>
  </div>
</template>

<script>
import myall from "@/components/classify/myall.vue";
import mycake from "@/components/classify/mycake.vue";
import myice from "@/components/classify/myice.vue";
import mytea from "@/components/classify/mytea.vue";
import changwen from "@/components/classify/changwen.vue";
import gift from "@/components/classify/gift.vue";
import mianbao from "@/components/classify/mianbao.vue";

export default {
  name: "app",
  data() {
    return {
      all2: false,
      flag: true,
      ok: false,
      coffeetea: false,
      dangao: false,
      lipin: false,
      hub: false,
    };
  },
  components: { myall, mycake, myice, mytea, changwen, gift, mianbao },

  methods: {
    all1() {
      (this.all2 = true),
        (this.flag = false),
        (this.ok = false),
        (this.coffeetea = false),
        (this.dangao = false),
        (this.lipin = false),
        (this.hub = false);
    },
    cake() {
      (this.all2 = false),
        (this.flag = true),
        (this.ok = false),
        (this.coffeetea = false),
        (this.dangao = false),
        (this.lipin = false),
        (this.hub = false);
    },
    ice() {
      (this.all2 = false),
        (this.flag = false),
        (this.ok = true),
        (this.coffeetea = false),
        (this.dangao = false),
        (this.lipin = false),
        (this.hub = false);
    },
    tea() {
      (this.all2 = false),
        (this.flag = false),
        (this.ok = false),
        (this.coffeetea = true),
        (this.dangao = false),
        (this.lipin = false),
        (this.hub = false);
    },
    chang() {
      (this.all2 = false),
        (this.flag = false),
        (this.ok = false),
        (this.coffeetea = false),
        (this.dangao = true),
        (this.lipin = false),
        (this.hub = false);
    },
    lip() {
      (this.all2 = false),
        (this.flag = false),
        (this.ok = false),
        (this.coffeetea = false),
        (this.dangao = false),
        (this.lipin = true),
        (this.hub = false);
    },
    hubg() {
      (this.all2 = false),
        (this.flag = false),
        (this.ok = false),
        (this.coffeetea = false),
        (this.dangao = false),
        (this.lipin = false),
        (this.hub = true);
    },
  },
};
</script>

<style>
.classify {
  margin-top: 110px;
  margin-left: 100px;
}
.box1 {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 15px;
}
.box2 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 15px;
}
.box1,
.box2 {
  display: flex;
  font-size: 13px;
}
.box2 {
  margin-top: 25px;
}
.box2 .item3 {
  color: rgb(189, 154, 114);
}
.box1 .item2,
.box2 .item2 {
  margin: 0 10px 0 10px;
  color: #684029;
}
.box1 .item1,
.box2 .item1 {
  margin: 0 20px 0 60px;
  color: rgb(163, 162, 162);
}
.box1 .item2:hover,
.box2 .item2:hover {
  color: #bb9772;
}
</style>
