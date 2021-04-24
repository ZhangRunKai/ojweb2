<template>

  <div class="login" >
    <el-form label-position="right" label-width="50px" :model="user">
      <el-form-item  label="请输入您的姓名:" label-width="120px">
        <el-input style="width: 300px" v-model="user.userName"></el-input>
      </el-form-item>
      <el-form-item  label="请输入您的账户:" label-width="120px">
        <el-input style="width: 300px" v-model="user.userAccount"></el-input>
      </el-form-item>
      <el-form-item label="请输入您的密码:" label-width="120px">
        <el-input style="width: 300px" type="password" v-model="user.userPassword"></el-input>
      </el-form-item>
      <el-form-item label="请再次确认密码:" label-width="120px">
        <el-input style="width: 300px" type="password" v-model="user.checkPassword"></el-input>
      </el-form-item>
      <el-button style="margin: auto" @click="register">注册</el-button>
      <el-button style="margin: auto" @click="gotoLogin">去登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        userName:'',
        userAccount:'',
        userPassword:'',
        checkPassword:'',
      },
    }
  },
  methods:{
    gotoLogin(){
      this.$router.push({path:"/login"});

    },
    register(){
      if(this.user.userName == null && this.user.userName ==""){
        this.$message.warning("您的姓名尚未填写")
      }
      else if(this.user.userAccount == null && this.user.userAccount ==""){
        this.$message.warning("您的账号尚未填写")

      }
      else if(this.user.userPassword == null && this.user.userPassword ==""){
        this.$message.warning("您的密码尚未填写")
      }
      else if(this.user.checkPassword == null && this.user.checkPassword ==""){
        this.$message.warning("请确认您的密码")

      }
      else if(this.user.password == this.user.checkPassword ){
        this.$message.warning("您的密码尚未填写")
      }
      else{
        this.$axios.post('/user/register',this.user).then((res)=>{
          if(res.data.status==200){
            this.$message({
              showClose: true,
              message: '注册成功',
              type: 'success'
            });
            this.$router.push({path:"/login"});
          }
          else{
            this.$message.warning(res.data.message)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.login{
  margin: 12% 38%;
  width: 50%;
}

</style>