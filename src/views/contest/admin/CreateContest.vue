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
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
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
          <el-button type="primary" @click="onSubmit">创建比赛</el-button>
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
        contestName: '',
        contestAuthor: '',
        contestBegin: '',
        isPrivate:true,
        contestPassword:'',
        content:'',
        problems:[],
      },
    }
  },
  methods: {
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
    }
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