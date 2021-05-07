<template>
  <div id="bg">
    <router-view/>
  </div>
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
</template>


<style>
#bg{
  margin:0;
  padding:0;
  /*background-image: url("../src/assets/bg.png");*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /*position: fixed;*/
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
</style>
