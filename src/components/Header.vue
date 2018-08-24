<!--  -->
<template>
  <div class="header">
    <div class="header-content">
      <div class="logo">Sleepywaker's Blog</div>
      <div class="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/tag">分类</router-link> |
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
  height:140px;
  line-height: 140px;
  width:100%;
  margin-right:320px;
  background-color: #C4C4C4;
}
.header-content{
  position:relative;
  width:80%;
  margin:0 auto;
}
.logo{
  float:left;
  font-size: 24px;
  border-bottom: 3px double #888; 
  height:75px;
  line-height: 120px;
}
.nav{
 
  float:right;

}
@media screen and (max-width:800px){
  .logo{
  float:none;
}
  .nav{
    height:40px;
    float:none;
    line-height:40px;
  }
}
</style>