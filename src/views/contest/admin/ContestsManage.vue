<template>

  <div>
    <div >
      <el-button @click="createContest">创建比赛</el-button>
      <span>
        <el-table
            :data="page.records"
            stripe
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
            prop="contestBegin"
            label="开始时间">
        </el-table-column>
        <el-table-column
            prop="contestEnd"
            label="结束时间时间">
        </el-table-column>
        <el-table-column
            prop="contestStatus"
            :formatter=contestStatus
            label="比赛状态">
        </el-table-column>
        <el-table-column
            :formatter=privateStatus
            label="比赛性质">
        </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="100">
          <template slot-scope="scope">
            <el-button @click="gotoContestEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">管理</el-button>
          </template>
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
    gotoContestEdit(row){
      console.log(row.contestId)
      this.$router.push({path:"/createEdit",query: {id:row.contestId}});
    },
    getProblem(data){
      console.log(data)
      this.$router.push({path:"/problem",query: {id:this.page.records[data].problemId}});
    },
    createContest(){
      this.$router.push({path:"/createContest"});
    },
    getData(){
      this.$axios.post('/contest/findContestByCreate',this.page).then((res)=>{
        if(res.data.status == 200){
          this.page = res.data.data;
        }
      })
    },
    handleSizeChange(val) {
      this.page.size=val
    },
    handleCurrentChange(val) {
      this.page.current=val
    },
    privateStatus(row) {
      return row.isPrivate==1 ? "私有" : "公开"
    },
    contestStatus(row) {
      if (row.contestStatus == 0) {
        return "草稿";
      }
      else if (row.contestStatus == 1) {
        return "发布";
      }
      else if (row.contestStatus == 2) {
        return "报名截止";
      }
      else if (row.contestStatus == 3) {
        return "废除";
      }
    },
  },
}
</script>

<style scoped>

</style>