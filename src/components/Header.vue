<!--  -->
<template>
  <div class="header">
    <div class="header-content">
      <div class="logo">Sleepywaker's Blog</div>
      <div class="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/keyword">分类</router-link> |
      <router-link to="/tag">标签</router-link>|
      <router-link to="/archive">归档</router-link> |
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
li{
  list-style:none;
  float:left;
  margin-left:40px;
}
.header{
  height:130px;
  width:100%;
  line-height:130px;
  margin-right:320px;
}
.header-content{
  width:80%;
  height:130px;
  margin:0 auto;
}
.logo{
  float:left;
  height:85px;
  font-size: 24px;
  border-bottom: 3px double #888;
}
.nav{
  float:right;
}
</style>