<template>
  <div class="siton">
    <router-link to="/wintertime" class="siton-son">
      <img :src="sitimg" alt="" />
      <h3>冬季刊·进博会</h3>
      <p>阅读全文>></p>
    </router-link>
    <router-link to="/autumntime" class="siton-son">
      <img :src="sitimg1" alt="" />
      <h3>廿一志秋刊·客服Q&A</h3>
      <p>阅读全文>></p>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sitimg:
        "https://images.weserv.nl/?url=static.21cake.com/public/images/0a/2c/db/520577a6cd05e8ff8fe54ac95b291ceb.jpg",
      sitimg1:
        "https://images.weserv.nl/?url=static.21cake.com/public/images/13/17/51/dea6a02ac712f5fc042a93d5cfe2c24a.jpg",
    };
  },
};
</script>
<style>
.siton {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.siton-son {
  width: 542px;
  height: 345px;
  border: 1px solid #bbb;
  text-decoration: none;
  border-radius: 10px;
}
.siton-son img {
  width: 542px;
  height: 252px;
  /* border-radius: 10px; */
  border-radius: 10px 10px 0 0;
}
.siton-son h3 {
  color: #000;
  font-size: 24px;
  padding: 0 16px;
  margin-top: 14px;
}
.siton-son p {
  color: #ad814b;
  margin-top: 14px;
  padding: 0 16px;
}
</style>