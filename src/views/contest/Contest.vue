<template>
  <div>
    <div style="overflow: hidden;">
      <p style="float:left;padding-left: 100px;padding-top: 30px;font-size: 40px">{{contest.contestName}}</p>
      <el-button style="float: right;padding-top: 30px;padding-right: 100px">{{contestStatus}}</el-button>
    </div>
    <div>
      <el-divider></el-divider>
      <div class="content markdown-body" v-html="contest.contestDetails"></div>
    </div>
  </div>
</template>

<script>
import 'github-markdown-css/github-markdown.css' // 然后添加样式markdown-body
export default {
  name: "Contest",
  data(){
    return{
      contest:{
        contestId:1,
        contestName:'新生杯',
        contestAuthor:'程序设计基础协会',
        contestDetails:'# 详情\n**加粗**asdasd',
        contestBegin:'2019-10-10 10:00:00',
        contestEnd:'2019-10-10 15:00:00',
        contestNum:50
      },
      contestStatus:"进入",

    }
  },
  created() {
    this.getContest();
    this.getDetails();
  },
  methods:{
    getContest(){

    },
    getDetails(){
      var MarkdownIt = require('markdown-it'),
          md = new MarkdownIt();
      var result = md.render(this.contest.contestDetails);
      this.contest.contestDetails = result;
    },
  }
}
</script>

<style scoped>

</style>