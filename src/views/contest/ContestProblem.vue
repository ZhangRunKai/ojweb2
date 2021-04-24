<template>
  <div>
    <div>
      <h1 style=" padding-top: 30px;font-size: 40px">{{problem.problemId}} {{problem.problemTitle}}</h1>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="padding-left: 40px">
      <el-tab-pane style="padding-left: 20px" label="题目" name="first">
        <div style="overflow: hidden;">
          <div style="float: right;width: 500px;height: 250px;text-align-all: center">
            <p>时间限制（java|c/c++）:{{problem.javaTimeLimited}}|{{problem.cTimeLimited}}</p>&#12288;&#12288;
            <p>空间限制（java|c/c++）:{{problem.javaSpaceLimited}}|{{problem.cSpaceLimited}}</p>
          </div>
          <div style="float: left;text-align: left;padding-left: 30px">
            <p style="font-size: 20px">题意:</p>
            <el-card shadow="hover">
              {{problem.problemContext}}
            </el-card>
            <p style="font-size: 20px">输入说明:</p>
            <el-card shadow="hover">
              {{problem.problemInput}}
            </el-card>
            <p style="font-size: 20px">输出说明:</p>
            <el-card shadow="hover">
              {{problem.problemOutput}}
            </el-card>
            <p style="font-size: 20px">输入样例:</p>
            <el-card shadow="hover">
              {{problem.problemSampleInput}}
            </el-card>
            <p style="font-size: 20px">输入样例:</p>
            <el-card shadow="hover">
              {{problem.problemSampleOutput}}
            </el-card>
          </div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="提交记录" name="second">

        <div >
        <span>
        <el-table
            :data="page.records"
            stripe
            header-click="getProblem"
            style="width: 100%">
        <el-table-column
            prop="problemId"
            label="#">
        </el-table-column>
        <el-table-column
            prop="problemTitle"
            label="标题">
          <template slot-scope="scope">
            <a @click="getProblem(scope.row.problemId)" style="color:blue;cursor:pointer">{{ scope.row.problemTitle }}</a>
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second',
      page:{
        size:10,
        current:1,
        total:0,
        records:[],
      },
      problem: {
        problemId: '1',
        problemTitle: 'A+B',
        problemAuthor: '张润锴',
        problemContext: '输入两个整数，求这两个整数的和是多少。',
        problemInput: '输入两个整数A,B，用空格隔开，0≤A,B≤108',
        problemOutput: '输出一个整数，表示这两个数的和',
        problemSampleInput: '3 4',
        problemSampleOutput: '7',
        javaTimeLimited: '1000ms',
        javaSpaceLimited: '64MB',
        cTimeLimited: '1000ms',
        cSpaceLimited: '64MB',
        problemNum: '100',
        problemAccept: '10',
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    handleSizeChange(val) {
      this.page.size=val
    },
    handleCurrentChange(val) {
      this.page.current=val
    },
  },
  created() {
    this.problem.problemId = this.$route.query.id;
  },
}
</script>

<style scoped>
.box-card {
  width: 480px;
}
</style>