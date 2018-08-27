<template>
  <div>
  <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
  <Header/>
  <div class="home">
      <router-view></router-view>
      <div class="linkStyle">
     <router-link to="/">上一页</router-link> <router-link to="/4">4</router-link><router-link to="/5">5</router-link><router-link to="/6">6</router-link>
      </div>
  </div>
  <Footer/>
</div>
  <Siteinfo/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Siteinfo from '@/components/Siteinfo.vue'
export default {
  data(){
    return {
    }
  },
  components:{
    Header,
    Footer,
    Siteinfo
  }
}
</script>
<style scoped>
.home{
  width:100%;
  min-height:calc(100vh - 220px);
  box-sizing: border-box;
  background-color:#BBE4FF;
  position:relative;
  padding-bottom:140px;
  padding-top:40px;
}
.linkStyle{
  height:100px;
  width:100%;
  line-height: 100px;
  position: absolute;
  bottom:0;
  text-align: center;
}
a{
  display:inline-block;
  margin-right:20px;
}
@keyframes in{
    from{
      padding-right:0;
      }
    to{
      padding-right:320px;
      }
  }
  @keyframes out{
    from{
      padding-right:320px;
    }
    to{
      padding-right:0;
    }
  }
  .infoShow{
    padding-right:320px;
    animation:in 0.5s ease-out;
  }
  .infoHide{
    padding-right:0;
    animation:out 0.5s ease-out;
  }
  @media screen and (max-width:800px){
    .infoShow,.infoHide{
      padding-right:0;
      animation: none;
    }
  }

 
</style>
