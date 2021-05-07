<template>
  <div>
    <div class="contestBody">
      <router-view/>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
name: "ContestView"
}
</script>

<style scoped>
.contestBody{
  width: 60%;
  margin-left: 5%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.contestHeader{

}
</style>