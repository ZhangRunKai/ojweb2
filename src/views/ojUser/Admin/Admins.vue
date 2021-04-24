<template>
  <div>
    <div >
      <span>
        <el-table
            :data="page.records"
            stripe
            header-click="getProblem"
            style="width: 100%">
        <el-table-column
            prop="userId"
            label="#">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="userAccount"
            label="账号">
        </el-table-column>
        <el-table-column
            prop="userSex"
            label="难度">
        </el-table-column>
        <el-table-column
            prop="roleName"
            label="角色">
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
  data(){
    return{
      page:{
        size:10,
        current:1,
        total:0,
        records:[],
      },
      admin:[],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getProblem(data){
      console.log(data)
    },
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
  },
}
</script>

<style scoped>
.ojBorder{
  margin-top: 20px;
  margin-left: 10%;
  width: 80%;
  height: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
a:hover{text-decoration:underline;color: blue;}
</style>