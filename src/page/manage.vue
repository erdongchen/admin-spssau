<template>
  <div class="manage_page">
    <header class="backHeader">
      <el-row>
        <el-col :span="5"
          ><div class="backlogosBox">
            <a href="backlogin.html"
              ><img class="backlogos" :src="logoImage"
            /></a></div
        ></el-col>
        <el-col :span="19"
          ><div class="">
            <p class="backTitle">运营指标与业务管理系统</p>
          </div></el-col
        >
      </el-row>
    </header>
    <el-menu>
      <el-menu-item label="运营指标" name="btn1">运营指标</el-menu-item>
      <el-menu-item label="信息查询" name="btn2">信息查询</el-menu-item>
      <el-menu-item label="微信订单" name="btn3">微信订单</el-menu-item>
      <el-menu-item label="未开发票" name="btn4">未开发票</el-menu-item>
      <el-menu-item label="会员时间" name="btn5">会员时间</el-menu-item>
      <el-menu-item label="手机解绑" name="btn6">手机解绑</el-menu-item>
      <el-menu-item label="问答管理" name="btn7">问答管理</el-menu-item>
      <el-menu-item label="问答记录" name="btn8">问答记录</el-menu-item>
    </el-menu>
  </div>
</template>


<script>
export default {
  name: "Manage",
  data() {
    return {
      logoImage: require("@/assets/back_header_logo.jpg"),
    };
  },
  //   methods: {},
};
</script>

<style lang="scss" scoped>
.manage_page {
  height: 100%;
  .backHeader {
    height: 78px;
    line-height: 78px;
    .backlogosBox {
      text-align: center;
      .backlogos {
        width: 113px;
        height: 45px;
        vertical-align: middle;
      }
    }

    .backTitle {
      color: #178aec;
      font-size: 24px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
}
</style>