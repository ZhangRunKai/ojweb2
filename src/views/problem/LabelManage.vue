<template>

  <div>
    <div>
      <el-dialog title="新建标签" :visible.sync="dialogCreateLabel" width="35%">
        <el-form :model="newLabel">
          <el-form-item label="标题:" label-width="70px">
            <el-input v-model="newLabel.labelName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogCreateProblem = false">取 消</el-button>
          <el-button type="primary" @click="createLabel">确 定</el-button>
        </div>
      </el-dialog>
      <el-button @click="dialogCreateLabel = true">新建标签</el-button>
    </div>
      <span>
        <el-table
            :data="page.records"
            border
            style="width: 100%">
        <el-table-column
            prop="labelId"
            label="编号">
        </el-table-column>
        <el-table-column
            prop="labelName"
            label="标签">
        </el-table-column>
        <el-table-column
            prop="labelCount"
            label="题目数量">
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
</template>

<script>
export default {
name: "LabelManage",
  data(){
    return{
      dialogCreateLabel:false,
      page:{
        size:10,
        current:1,
        total:0,
        records:[],
      },
      labelData:[],
      newLabel:{
        labelName:'',
      }
    }
  },
  created() {
    this.getLabel();
  },
  methods:{
    getLabel(){

      this.$axios.post('/label/findAll',this.page).then((res)=>{
        console.log(res)
        this.page = res.data.data;
      })
    },
    createLabel(){

      this.$axios.post('/label/add',this.newLabel).then((res)=>{

        if(res.data.status===200){
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          });
          console.log(res)
        }
        else{
          this.$message.warning(res.data.message)
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
  },
}
</script>

<style scoped>

</style>