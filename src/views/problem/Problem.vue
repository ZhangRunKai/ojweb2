<template>
  <div>
    <div>
      <h1 style=" padding-top: 30px;font-size: 40px">{{problem.problemTitle}}</h1>
      <div style="width: 500px;float: right">
        <p>时间限制（java&#12288;|&#12288;c/c++）:{{problem.javaTimeLimited}}|{{problem.ctimeLimited}}</p>ms&#12288;&#12288;
        <p>空间限制（java&#12288;|&#12288;c/c++）:{{problem.javaSpaceLimited}}|{{problem.cspaceLimited}}</p>kb
      </div>
    </div>
      <div style="overflow: hidden;">
        <div style="float: left;text-align: left;padding-left: 30px">
          <p style="font-size: 20px">题意:</p>
          <el-card shadow="hover">
            {{problem.problemContext}}
          </el-card>
          <p style="font-size: 20px">输入说明:</p>
          <el-card shadow="hover">
            {{problem.problemInput}}
          </el-card>
          <p style="font-size: 20px">输出说明:</p>
          <el-card shadow="hover">
            {{problem.problemOutput}}
          </el-card>
          <p style="font-size: 20px">输入样例:</p>
          <el-card shadow="hover">
            {{problem.problemSampleInput}}
          </el-card>
          <p style="font-size: 20px">输入样例:</p>
          <el-card shadow="hover">
            {{problem.problemSampleOutput}}
          </el-card>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      problem: {
        problemId: '',
        problemTitle: '',
        problemAuthor: '',
        problemContext: '',
        problemInput: '',
        problemOutput: '',
        problemSampleInput: '',
        problemSampleOutput: '',
        javaTimeLimited: '',
        javaSpaceLimited: '',
        ctimeLimited: '',
        cspaceLimited: '',
        problemNum: '',
        problemAccept: '',
      }
    }
  },
  methods: {
    getData(){
      this.$axios.post('/problem/findPublic',this.problem).then((res)=>{
        this.problem = res.data.data;
      })
    },
  },
  created() {
    this.problem.problemId = this.$route.query.id;
    this.getData();
  },
 }
</script>

<style scoped>
.box-card {
  width: 480px;
}
</style>