<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#ffffff" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/problems">题库</el-menu-item>
        <el-menu-item index="/222">课程</el-menu-item>
        <el-menu-item index="/contests">比赛</el-menu-item>
        <el-menu-item index="/4">题目管理</el-menu-item>
        <el-menu-item index="/p2lem">课程管理</el-menu-item>
        <el-menu-item index="/pr2lem">比赛管理</el-menu-item>
        <el-menu-item index="/p2blem">系统管理</el-menu-item>

      </el-menu>
    </el-header>
    <el-main>
      <router-view style="width: 80%;margin-left: 10%;background-color: #ffffff;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"/>
    </el-main>
<!--    <el-footer>Footer</el-footer>-->
  </el-container>
</template>

<script>

export default {
  data(){
    return{
      activeIndex:"/",
    }
  },
  created() {
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log({path:key})
      this.$router.push({path:key});
    }
  }
}
</script>
<style>
.el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}
</style>
