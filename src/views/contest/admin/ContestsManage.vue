<template>

  <div>
    <div >
      <el-button>创建比赛</el-button>
      <span>
        <el-table
            :data="page.records"
            stripe
            header-click="getProblem"
            style="width: 100%">
        <el-table-column
            prop="contestId"
            label="#">
        </el-table-column>
        <el-table-column
            prop="contestName"
            label="比赛名称">
        </el-table-column>
        <el-table-column
            prop="studentNum"
            label="报名人数">
        </el-table-column>
        <el-table-column
            prop="isPrivate"
            label="比赛性质">
        </el-table-column>
      </el-table>
      </span>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.current"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
name: "ContestsManage",
  data(){
    return{
      page:{
        size:10,
        current:1,
        total:0,
        records:[],
      },
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getProblem(data){
      console.log(data)
      this.$router.push({path:"/problem",query: {id:this.page.records[data].problemId}});
    },
    getData(){
      this.$axios.post('/contest/findContestByCreate',this.page).then((res)=>{
        this.page = res.data.data;

      })
    },
    handleSizeChange(val) {
      this.page.size=val
    },
    handleCurrentChange(val) {
      this.page.current=val
    },
  },
}
</script>

<style scoped>

</style>