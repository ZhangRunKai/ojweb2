<template>
  <div>
    <div id="creatProblemBody">
      <div style="color: #333; text-align: center;line-height: 100px"><h1 style="top: 40px">新建题目</h1></div>
      <el-form :model="newProblem" label-position="left">
        <el-form-item label="标题:" label-width="70px">
          <el-input v-model="newProblem.problemTitle"></el-input>
        </el-form-item>
        <el-form-item label="作者:" label-width="70px">
          <el-input v-model="newProblem.problemAuthor"></el-input>
        </el-form-item>
        <el-form-item label="Java最长运行时间（ms）:" label-width="150px">
          <el-input v-model="newProblem.javaTimeLimited"></el-input>
        </el-form-item>
        <el-form-item label="Java最大运行空间（kb）:" label-width="150px">
          <el-input v-model="newProblem.javaSpaceLimited"></el-input>
        </el-form-item>
        <el-form-item label="其他语言最长运行时间（ms）:" label-width="150px">
          <el-input v-model="newProblem.otherTimeLimited"></el-input>
        </el-form-item>
        <el-form-item label="其他语言最大运行空间（kb）:" label-width="150px">
          <el-input v-model="newProblem.otherSpaceLimited"></el-input>
        </el-form-item>
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
          <mavon-editor v-model="newProblem.problemContent"/>
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
          value: '0',
          label: '公开'
        }, {
          value: '1',
          label: '私有'
        }
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
        problemContent:'**以下格式仅供参考**\n' +
            '\n' +
            '### 题意\n' +
            '巴拉巴拉巴拉...\n' +
            '### 输入说明\n' +
            '这里得跟小伙伴说明题目会输入什么内容\n' +
            '### 输出说明\n' +
            '这里得说明输出的内容\n' +
            '### 输入样例\n' +
            '```\n' +
            '输入的数据应该用代码块包围\n' +
            '方便用户复制\n' +
            '```\n' +
            '### 输入样例\n' +
            '```C++\n' +
            '#include <iostream>\n' +
            'using namespace std;\n' +
            '\n' +
            'int main(){\n' +
            '    cout << "Hello OJ" << endl;\n' +
            '    return 0;\n' +
            '}\n' +
            '``` \n' +
            '#### 样例说明\n' +
            '在这里可以给样例做一些说明，结合题意',
        javaTimeLimited:'',
        javaSpaceLimited:'',
        otherTimeLimited:'',
        otherSpaceLimited:'',
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
      console.log(this.newProblem)
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