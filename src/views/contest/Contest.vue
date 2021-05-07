<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix" style="padding: 20px 20px">
      <span style="font-size: 40px">{{contest.contestName}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="gotoContest">
        <p v-if="contestStatus==1">进入</p>
        <p v-else-if="contestStatus==0">{{contestStatusView}}后开始</p>
        <p v-else>已结束</p>
      </el-button>
    </div>
    <div class="content markdown-body" v-html="about"></div>
  </el-card>
</template>

<script>
import 'github-markdown-css/github-markdown.css' // 然后添加样式markdown-body
import { setInterval, clearInterval } from 'timers'
export default {
  name: "Contest",
  data(){
    return{
      timers:null,
      contest:'',
      contestStatus:'',
      contestStatusView:'',
      about:'',
      Enum:{

      }
    }
  },
  created() {
    this.getContest();
  },
  methods:{
    gotoContest(){
      console.log(111)
      if(this.contestStatus !=0){
        console.log("sss")
        this.$router.push({path:'/ContestMain'})
      }
    },

    /**
     * 用户请求比赛，获取比赛相关说明
     */
    getContest(){
      this.contest={
        contestId:1,
            contestName:'新生杯',
            contestAuthor:'程序设计基础协会',
            contestDetails:'热身赛只是用来走一遍正式比赛的流程来预测正式比赛中可能发生的各种情况。\n' +
        '\n' +
        '**提示（一）：正式赛题目中涉及 多组输入**\n' +
        '\n' +
        '**例题：**\n' +
        '\n' +
        '**输入：**\n多组输入，每次输入两个整数a,b\n' +
        '\n' +
        '**输出：**输出a+b的值\n' +
        '\n' +
        '**输入样例：**\n' +
        '\n' +
        '>1 2\n' +
        '>\n' +
        '>2 3\n' +
        '\n' +
        '**输出样例：**\n' +
        '\n' +
        '> 3\n' +
        '>\n' +
        '> 5\n' +
        '\n' +
        '**①scanf版主程序应如下**\n' +
        '\n' +
        '```c\n' +
        'int main(void){\n' +
        '\tint a,b;\n' +
        '    while(scanf("%d%d",&a,&b)!=EOF){\n' +
        '    \tprintf("%d\\n",a+b);\n' +
        '    }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '**②cin版主程序应如下**\n' +
        '\n' +
        '```c++\n' +
        'int main(void){\n' +
        '    int a,b;\n' +
        '    while(cin>>a>>b){\n' +
        '    \tcout<<a+b<<endl;\n' +
        '    }\n' +
        '}\n' +
        '```',
            contestBegin:'2020-10-10 10:00:00',
            contestEnd:'2020-10-10 15:00:00',
            contestNum:50
      }
      console.log(new Date(this.contest.contestBegin))
      this.about = this.getMarkdown(this.contest.contestDetails)
      console.log(this.contestStatusView)
      console.log("------")
      this.timeRefresh();
    },
    getMarkdown(str){
      var MarkdownIt = require('markdown-it'),
          md = new MarkdownIt();
      return md.render(str);
    },
    // 定时刷新数据函数
    timeRefresh() {
      console.log("timers")
      console.log(this.timers)
      console.log("contest")
      console.log(this.contest)
      if(this.contest == null){
        return ;
      }
      const contestBegin = new Date(this.contest.contestBegin);
      const contestEnd = new Date(this.contest.contestEnd);

      //初始化contestStatus
      let temp = new Date();
      if (temp > contestBegin && temp < contestEnd){
        console.log(1)
        this.contestStatus = 1;
        return ;
      }else if (temp > contestEnd){
        this.contestStatus = 2;
        console.log(2)
        return ;
      }
      this.contestStatus = 0;

      // 计时器为空，操作
      this.timers = setInterval(() => {
        console.log(this.contestStatusView)
        let temp = new Date();
        console.log(temp)
        console.log(contestBegin <= temp)
        if (contestBegin <= temp){
          this.contestStatus = 1;
          this.clear();
        }else {
          let lefttime = contestBegin.getTime() - temp.getTime(),  //距离结束时间的毫秒数
              leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
              lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
              leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
              lefts = Math.floor(lefttime/1000%60);  //计算秒数
          this.contestStatusView = leftd + "天" + lefth + ":" + leftm + ":" + lefts;  //返回倒计时的字符串
        }
      }, 100);
    },
    // 停止定时器
    clear() {
      clearInterval(this.timers); //清除计时器
      this.timers = null; //设置为null
    },
  },
  beforeDestroy() {
    this.clear();
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 90%;
  margin-left: 5%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>