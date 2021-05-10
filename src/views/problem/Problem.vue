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
<!--    @changes="changes"-->
    <codemirror  ref="myCm"  v-model="code"  :options="cmOptions"  class="code"/>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
require("codemirror/mode/python/python.js")
require('codemirror/addon/fold/foldcode.js')
require('codemirror/addon/fold/foldgutter.js')
require('codemirror/addon/fold/brace-fold.js')
require('codemirror/addon/fold/xml-fold.js')
require('codemirror/addon/fold/indent-fold.js')
require('codemirror/addon/fold/markdown-fold.js')
require('codemirror/addon/fold/comment-fold.js')
export default {
  components:{
    codemirror
  },
  data() {
    return {
      code:{},
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
      },
      cmOptions: {
        tabSize: 4,
        mode: 'python',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true,
        lineWiseCopyCut: true,
        showCursorWhenSelecting: true,
        matchBrackets: true,
        line: true,
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