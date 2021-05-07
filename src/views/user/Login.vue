<template>

  <div class="login" >
    <el-form label-position="right" label-width="50px" :model="user">
      <el-form-item  label="账户">
        <el-input style="width: 200px" v-model="user.userAccount"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input style="width: 200px" type="password" v-model="user.userPassword"></el-input>
      </el-form-item>
      <el-button style="margin: auto" @click="login">登陆</el-button>
      <el-button style="margin: auto" @click="gotoRegister">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        userAccount:'',
        userPassword:'',
      }
    }
  },
  methods:{
    gotoRegister(){
      this.$router.push({path:"/register"});
    },
    login(){
      this.$axios.post('/user/login',this.user).then((res)=>{
        if(res.data.status==200){
          this.$message({
            showClose: true,
            message: '登陆成功',
            type: 'success'
          });
          var token = res.headers["authentication"];
          localStorage.setItem("authentication",token);
          console.log(res)
          sessionStorage.setItem("userId", res.data.data.userId);
          sessionStorage.setItem("userName", res.data.data.userName);
          sessionStorage.setItem("rolePower", res.data.data.rolePower);
          this.$router.push({path:"/"});
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
  .login{
    margin: 12% 38%;
    width: 24%;
  }

</style>