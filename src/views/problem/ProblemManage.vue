<template>
  <div>
    <div>
      <el-button @click="createProblem()">新建题目</el-button>
    </div>
    <div>
      <span>
        <el-table
          :data="page.records"
          border
          style="width: 100%">
        <el-table-column
            prop="problemId"
            label="编号">
        </el-table-column>
        <el-table-column
            prop="problemTitle"
            label="标题">
        </el-table-column>
        <el-table-column
            prop="problemAuthor"
            label="出题人">
        </el-table-column>
        <el-table-column
            label="标签">
          <template slot-scope="scope">
            <el-tag
                v-for="item in scope.row.labels"
                :key="item.labelId"
                size="mini"
                effect="plain">
              {{ item.labelName }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="problemDegree"
            label="难度">
        </el-table-column>
        <el-table-column
            prop="problemPassRate"
            label="通过率">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
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
  data() {
    return {
      kg:" ",
      dialogCreateProblem:false,
      problems:[],
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
    getData(){
      this.$axios.post('/problem/findAll',this.page).then((res)=>{
        console.log(res)
        this.page = res.data.data;
        for(var i=0;i<this.page.total;i++){
          if(this.page.records[i].problemNum===0){
            this.page.records[i].problemPassRate="0.00%";
          }
          else{
            this.page.records[i].problemPassRate=(Math.floor(this.page.records[i].problemAccept*10000/this.page.records[i].problemNum)/100)+"%"
          }
        }
      })
    },
    handleSizeChange(val) {
      this.page.size=val
    },
    handleCurrentChange(val) {
      this.page.current=val
    },
    handleClick(row) {
      console.log(row);
    },
    createProblem(){
      this.$router.push({path:"createProblem"})
    },
  },
}
</script>
<style>
/*.block{*/
/*  width: 80%;*/
/*  margin-left: 10%;*/
/*}*/
/*.el-table__header tr,*/
/*.el-table__header th {*/
/*  padding: 0;*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*}*/
/*.el-table__body tr,*/
/*.el-table__body td {*/
/*  padding: 0;*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*}*/
</style>
