<template>
  <el-container class="box-card">
    <el-aside width="200px" style="margin: 10px">
      <el-menu @select="handleSelect">
        <el-menu-item index="/"><i class="el-icon-s-home el-icon--left"></i>个人题库</el-menu-item>
        <el-menu-item index="/contestProblems"><i class="el-icon-menu el-icon--left"/>题库管理</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-video-camera el-icon--left"/>提交</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-s-data el-icon--left"/>榜单</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="margin: 10px">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
name: "ProblemMain",
  methods:{
    handleSelect(key) {
      console.log({path:key})
      this.$router.push({path:key});
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 90%;
  margin-left: 5%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>