<template>
  <div class="buttom-top">
    <div class="box">
      <div class="box-left">
        <img :src="logoimg" alt="" class="leftimg0" />
        <img :src="wenziimg" alt="" class="leftimg1" />
        <a href="https://weibo.com/">
          <img :src="sinaimg" alt="" class="leftimg2" />
        </a>
        <div>
          <img :src="wechatimg" alt="" class="leftimg2" />
          <img src="" alt="" />
        </div>
        <div>
          <img :src="appimg" alt="" class="leftimg2" />
        </div>
      </div>
      <div class="box-two">
        <p>关于我们</p>
        <p>联系我们</p>
        <p>
          订购专线：400 650 2121 （服务时间 08:00–22:00）;
          <br />

          企业团购热线：021-37768380；
          <br />
          客服电话：021-23099721（全国）；
          <br />
          kefu@21cake.com（邮箱）；
          <br />
        </p>
        <router-link to="" class="to1">订购帮助</router-link>
        <router-link to="" class="to1">企业合作</router-link>
        <router-link to="" class="to1">生产经营资质</router-link>
        <router-link to="" class="to1">公告专区</router-link>
      </div>
      <div class="box-three">
        <p>订购时间</p>
        <p>
          杭州/广州：提前5小时预订；
          <br />
          北京：提前6小时预订；
          <br />
          上海：提前5.5-6小时预订；
          <br />
          天津/苏州/无锡/深圳：提前8小时预订（部分偏远地区除外，当日22点以后订单，于次日8点开始审核）
          <br />
        </p>
        <span>
          当日蛋糕配送截止下单时间：北京/上海：16:30；杭州/广州：14:00；天津：10:30；苏州/无锡/深圳：11:00
        </span>
      </div>
      <div class="box-four">
        <p>网络运营</p>
        <p>
          网站注册公司名称: 北京廿一客食品有限公司 地址:
          北京市北京经济技术开发区兴海二街5号院3号楼
          <br />
          网站运营：廿一客（上海）电子商务有限公司
          地址：上海市松江区新效支路518号
          <br />
          上海廿一客食品有限公司分公司 地址：上海市松江区新效支路518号
          <br />
          杭州廿一客食品有限公司 地址：杭州市滨江区秋溢路500号
          <br />
          广州廿一客食品有限公司 地址：广州市南沙区东涌镇鱼窝头大道段
          <br />
          北京廿一客食品有限公司 地址：北京市北京经济技术开发区兴海二街5号院
          <br />
          深圳廿一客贸易有限公司 地址：深圳市福田区星河世纪大厦A栋1717
          <br />
          天津廿一客食品有限公司 地址：天津市河西区麦收大厦2-2004
          <br />
          广州廿一客食品贸易有限公司 地址：广州市南沙区东涌镇鱼窝头大道段
          <br />
          举实（上海）食品有限公司 地址：上海市松江区新效支路518号
          <br />
        </p>
      </div>
    </div>
    <div class="box-bottom"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoimg:
        "https://images.weserv.nl/?url=static.21cake.com/themes/site/img/footer-logo-v2.png",
      wenziimg:
        "https://images.weserv.nl/?url=static.21cake.com/themes/site/img/footer-solgan.png",
      sinaimg:
        "https://images.weserv.nl/?url=static.21cake.com/themes/site/img/footer-icon-weibo.png",
      wechatimg:
        "https://images.weserv.nl/?url=static.21cake.com/themes/site/img/footer-icon-weixin.png",
      appimg:
        "https://images.weserv.nl/?url=static.21cake.com/themes/site/img/footer-icon-app.png",
    };
  },
};
</script>
<style  scoped="scoped">
.buttom-top {
  margin-top: 50px;
  width: 100%;
  height: 410px;
  background-color: #000;
}
.box {
  display: flex;
  padding: 40px 0;
  justify-content: space-around;
}
.box p {
  padding: 10px 0;
  color: #fff;
  font-size: 12px;
}
.box-left {
  display: flex;
  width: 112px;
  flex-direction: column;
}
.box-left .leftimg0 {
  width: 100px;
  height: 60px;
}
.box-left .leftimg1 {
  width: 120px;
  height: 60px;
}
.box-left .leftimg2 {
  width: 40px;
  height: 50px;
}
.box-left img {
  padding: 10px 0;
}
.box-two {
  width: 220px;
  color: #fff;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.box-two .to1 {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 5px 0;
}
.box-two p:last-of-type {
  font-size: 12px;
  text-align: justify;
  line-height: 17px;
  color: #b3b2b2;
}
.box-three {
  width: 220px;
  color: #fff;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.box-three span {
  display: block;
  padding: 20px 0;
  font-size: 12px;
  text-align: justify;
  line-height: 17px;
  color: #b3b2b2;
}
.box-three p:last-of-type {
  font-size: 12px;
  text-align: justify;
  line-height: 17px;
  color: #b3b2b2;
}
.box-four {
  width: 400px;
  color: #fff;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.box-four p:last-of-type {
  font-size: 12px;
  text-align: justify;
  line-height: 17px;
  color: #b3b2b2;
}
.box-bottom {
  width: 100%;
  border-bottom: 1px solid white;
}
</style>