<template>

  <div >
      <span>
        <el-table
            :data="page.records"
            stripe
            header-click="gotoContest"
            style="width: 100%">
        <el-table-column
            prop="contestName"
            label="比赛">
          <template slot-scope="scope">
            <a @click="gotoContest(scope.row.contestId)" style="color:blue;cursor:pointer">{{ scope.row.contestName }}</a>
          </template>
        </el-table-column>
        <el-table-column
            prop="contestAuthor"
            label="创建人">
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
            prop="contestNum"
            label="人数">
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
</template>

<script>
export default {
name: "Contests",
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
    this.getContest();
  },
  methods:{
    gotoContest(contestId){
      this.$router.push({path:"/contest",query: {contestId:contestId}});

    },
    getContest(){
      this.page.records=[
        {contestId:1,contestName:'新生杯',contestAuthor:'程序设计基础协会',contestBegin:'2019-10-10 10:00',contestEnd:'2019-10-10 15:00',contestNum:50},
      ]
      this.page.total=1;
    },
    handleSizeChange(val) {
      this.page.size=val
    },
    handleCurrentChange(val) {
      this.page.current=val
    },
  }
}
</script>

<style scoped>

</style>