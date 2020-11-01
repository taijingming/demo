<template>
  <div class="addrBox">
    <div class="addr" :style="{ opacity: count }">
      <h3>地址管理:</h3>
      <div class="addrinfo">
        <el-button type="text" @click="open">点击添加地址</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: "",
      count: 1,
    };
  },

  methods: {
    add1() {
      this.isShow = "true";
      this.count = 0.3;
    },
    open() {
      this.$alert("最多可以添加10条", "添加地址", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
};
</script>
<style scoped="scoped">
.addrBox {
  width: 80%;
  margin: 50px auto;
  padding: 10px 50px;
}
.addr {
  margin-top: 100px;
}
.addrinfo {
  width: 100%;
  height: 200px;
  border: 1px solid #666;
  text-align: center;
  line-height: 200px;
}
.addrinfo:hover {
  color: gold;
}
</style>