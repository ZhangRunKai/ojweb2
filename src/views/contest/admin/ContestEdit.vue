<template>
  <div>
    <el-page-header class="ojPageHeader" @back="goBack" content="创建比赛">
    </el-page-header>
    <div class="ojBody">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="比赛名称：">
          <el-input v-model="form.contestName" style="width: 270px"></el-input>
        </el-form-item>
        <el-form-item label="主办方：">
          <el-input v-model="form.contestAuthor" style="width: 270px"></el-input>
        </el-form-item>
        <el-form-item label="比赛性质：">
          <el-switch
              v-model="form.isPrivate"
              active-text="私有"
              inactive-text="公开">
          </el-switch>
        </el-form-item>
        <el-form-item v-if="form.isPrivate" label="比赛密码">
          <el-input v-model="form.contestPassword" style="width: 270px"></el-input>
        </el-form-item>
        <el-form-item label="比赛时间">
          <el-date-picker
              v-model="form.contestBegin"
              type="datetime"
              start-placeholder="开始时间">
          </el-date-picker>
          <p>至</p>
          <el-date-picker
              v-model="form.contestEnd"
              type="datetime"
              start-placeholder="结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="报名截止时间">
          <el-date-picker
              v-model="form.joinEnd"
              type="datetime"
              start-placeholder="报名截止时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="比赛题目">
          <el-button @click="addProblem">新增题目</el-button>
        </el-form-item>
        <el-form-item
            v-for="(item, index) in form.problems"
            :label="'题目' + (1+index) + '：'"
            :key="item.problemId"
        >
          <el-input v-model="item.problemId" style="width: 270px"></el-input><el-button @click.prevent="removeProblem(item)">删除</el-button>
        </el-form-item>
        <el-form-item label="比赛详情">
          <mavon-editor v-model="form.content"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createContest">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
  name: "CreateContest",
  data(){
    return{
      form:{
        contestId:'',
        contestName: '',
        contestAuthor: '',
        contestBegin: '',
        joinEnd:'',
        contestEnd:'',
        isPrivate:true,
        contestPassword:'',
        content:'',
        problems:[],
      },
    }
  },
  created() {
    this.form.contestId = this.$route.query.id;
  },
  methods: {
    createContest(){
      console.log(typeof this.form.contestBegin)
      this.form.contestBegin = this.tranData(this.form.contestBegin)
      this.form.contestEnd = this.tranData(this.form.contestEnd)
      this.form.joinEnd = this.tranData(this.form.joinEnd)
      if(this.form.isPrivate){
        this.form.isPrivate=1;
      }
      else {
        this.form.isPrivate=0;
      }

      this.$axios.post('/contest/createContest',this.form).then((res)=>{
        if(res.data.status==200){
          this.$message({
            showClose: true,
            message: '保存成功',
            type: 'success'
          });
          this.goBack();
        }
        else{
          this.$message.warning(res.data.message)
        }
      })
    },
    removeProblem(item) {
      var index = this.form.problems.indexOf(item)
      if (index !== -1) {
        this.form.problems.splice(index, 1)
      }
    },
    addProblem(){
      this.form.problems.push({
        problem:''
      });
    },
    goBack() {
      this.$router.go(-1)
    },
    onSubmit() {
      console.log(this.form);
      console.log('submit!');
    },
    tranData(now){
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth();//得到月份
      var date = now.getDate();//得到日期
      var hour = now.getHours();//得到小时
      var minu = now.getMinutes();//得到分钟
      var sec = now.getSeconds();//得到秒
      month = month + 1;
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;
      if (hour < 10) hour = "0" + hour;
      if (minu < 10) minu = "0" + minu;
      if (sec < 10) sec = "0" + sec;
      return year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
    },
  },
}
</script>

<style scoped>
.ojPageHeader{
  margin-left: 10%;
  width: 80%;
  height: 80%;
  margin: 20px;
}
.ojBody{
  margin-left: 10%;
  width: 80%;
  height: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>