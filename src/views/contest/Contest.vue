<template>
  <div>
    <div style="overflow: hidden;">
      <p style="float:left;padding-left: 100px;padding-top: 30px;font-size: 40px">{{contest.contestName}}</p>
      <el-button style="float: left;padding-top: 30px;padding-right: 100px">{{contestStatus}}</el-button>
    </div>
    <div>
      <el-card shadow="hover">
        <p>{{contest.contestDetails}}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contest",
  data(){
    return{
      contest:{
        contestId:1,
        contestName:'新生杯',
        contestAuthor:'程序设计基础协会',
        contestDetails:'sadsadsadsadsadasdsa',
        contestBegin:'2019-10-10 10:00:00',
        contestEnd:'2019-10-10 15:00:00',
        contestNum:50
      },
      contestStatus:"进入",

    }
  },
  created() {
    this.getContest();
  },
  methods:{
    getContest(){

    }
  }
}
</script>

<style scoped>

</style>