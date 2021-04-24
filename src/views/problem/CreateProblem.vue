<template>
  <div>
    <div id="creatProblemBody">
      <div style="color: #333; text-align: center;line-height: 100px"><h1 style="top: 40px">新建题目</h1></div>
      <el-form :model="newProblem" label-position="left">
        <el-row>
          <el-col :span="10">
            <el-form-item label="标题:" label-width="70px">
              <el-input v-model="newProblem.problemTitle"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="作者:" label-width="70px">
              <el-input v-model="newProblem.problemAuthor"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item label="最长运行时间（ms）:" label-width="150px">
              <el-input v-model="newProblem.problemTimeLimited"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="最大运行空间（kb）:" label-width="150px">
              <el-input v-model="newProblem.problemSpaceLimited"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="题目权限:" label-width="80px">
              <el-select class="left" v-model="newProblem.problemPower" placeholder="请选择">
                <el-option
                    v-for="item in problemPower"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="题目难度:" label-width="80px">
              <el-input v-model="newProblem.problemDegree" type="number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="题目标签">
              <el-select
                  v-model="newProblem.labels"
                  value-key="labelId"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="请选择题目标签">
                <el-option
                    v-for="item in labels"
                    :key="item.labelId"
                    :label="item.labelName"
                    :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="题目内容:" label-width="80px">
          <el-input v-model="newProblem.problemContext" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="输入规则:" label-width="80px">
          <el-input v-model="newProblem.problemInput" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="输出规则:" label-width="80px">
          <el-input v-model="newProblem.problemOutput" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="输入样例:" label-width="80px">
          <el-input v-model="newProblem.problemSampleInput" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="输出样例:" label-width="80px">
          <el-input v-model="newProblem.problemSampleOutput" type="textarea"></el-input>
        </el-form-item>
        <el-button @click="dialogCreateProblem = false">取 消</el-button>
        <el-button type="primary" @click="createProblem">确 定</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateProblem",
  data() {
    return{
      labels:[],
      problemPower:[{
          value: '1',
          label: '公开'
        }, {
          value: '2',
          label: '同组可见'
        }, {
          value: '3',
          label: '个人可见'
        },
      ],
      page:{
        size:100,
        current:1,
        total:0,
        records:[],
      },
      newProblem:{
        problemId:'',
        problemTitle:'',
        problemAuthor:'',
        problemContext:'',
        problemTimeLimited:'',
        problemSpaceLimited:'',
        problemSampleInput:'',
        problemSampleOutput:'',
        problemInput:'',
        problemOutput:'',
        problemPower:'',
        problemDegree:'',
        problemNum:'',
        problemAccept:'',
        labels:[],
      }
    }
  },
  created() {
    this.getLabel();
  },
  methods:{
    getLabel(){
      this.$axios.post('/label/findAll',this.page).then((res)=>{
        this.labels = res.data.data.records;
      })
    },
    createProblem(){
      this.$axios.post('/problem/add',this.newProblem).then((res)=>{
        this.page = res.data.data;
        if(res.data.status==200){
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          });
          // this.$router.push({path:"/"});
        }
        else{
          this.$message.warning(res.data.message)
        }
      })
    }
  }
}
</script>

<style scoped>
  #creatProblemBody{
    width: 80%;
    margin-left: 10%;
  }
</style>