<!--  -->
<template>
  <div>
    <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
    <Header/>
    <div class="archive">
      <div class="article-content">
      <span>2018</span>
      <ul>
        <li  v-for="item in artList"  v-if="item.date.indexOf('2018')>-1" > 
          <router-link class='title'    :to="{path:item.path}" >{{item.title}}</router-link>
        </li>
      </ul> 
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
import articles from './../assets/articles.json'
  export default {
    data(){
      return {
        artList:'',
      }
    },
    mounted(){
      this.getArt()
    },
    components:{
      Header,
      Footer,
      Siteinfo
    },
    methods:{
      getArt(){
        this.artList=articles;
      }
    }
  }
</script>
<style scoped>
  .archive{
    min-height:calc(100vh - 210px);
    box-sizing:border-box;
    width:100%;
    background-color:#BBE4FF;
  }
  .article-content{
    width:60%;
    margin:0 auto;
  }
  .title{
    display:block;
    width:100%;
    height:40px;
    text-align: left;
    line-height:40px;
    border-bottom: 1px dashed #000;
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
  a{
    text-decoration-line:none;
  }
  @media screen and (max-width:800px){
  .article-content{
    width:100%;
  }
  .nav{
    height:40px;
    float:none;
    line-height:40px;
  }
}
</style>