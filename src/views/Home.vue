<template>
  <el-container>
    <el-header class="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/problems">题库</el-menu-item>
        <el-menu-item index="/222">课程</el-menu-item>
        <el-menu-item index="/contests">比赛</el-menu-item>
        <el-menu-item index="/4">题目管理</el-menu-item>
        <el-menu-item index="/p2lem">课程管理</el-menu-item>
        <el-menu-item index="/contestManage">比赛管理</el-menu-item>
        <el-menu-item index="/p2blem">系统管理</el-menu-item>

      </el-menu>
      <el-dropdown style="margin-top: 20px; font-size: 14px;">
        <span class="el-dropdown-link">
          {{user.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
<!--    <el-footer>Footer</el-footer>-->
  </el-container>
</template>

<script>

export default {
  data(){
    return{
      activeIndex:"/",
      user:{
        userId: "",
        userName: "",
        rolePower:"",
      },
    }
  },
  created() {
    this.user.userId = sessionStorage.getItem("userId");
    this.user.userName = sessionStorage.getItem("userName");
    this.user.rolePower = sessionStorage.getItem("rolePower");
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
.header{
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  background-color:#ffffff;
}
</style>
