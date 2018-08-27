<!--  -->
<template>
  <div>
    <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
    <Header/>
    <div class="archive">
      <div class="article-content">
      <div class="yearStyle">2018</div>
      <ul>
        <li  v-for="item in artList"  v-if="item.date.indexOf('2018')>-1" >
          <div class='title'>
          <div class="date">{{item.date}}</div> <div class="artLink"> <router-link :to="{path:item.path}" >{{item.title}}</router-link></div>
          </div> 
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
    min-height:calc(100vh - 220px);
    box-sizing:border-box;
    width:100%;
    background-color:#BBE4FF;
    position:relative;
    padding-top:20px;
    padding-bottom:20px;
  }
  .yearStyle{
    width:100%;
    height:30px;
    line-height:30px;
    text-align:left;
    padding-left:10px;
    border-bottom:2px dotted #088DE7;
  }
  .yearStyle::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 20px;
    margin-left: -4px;
    margin-top: -4px;
    width: 8px;
    height: 8px;
    background: #6BC1FA;
    border-radius: 50%;
  }
  .article-content{
    width:60%;
    margin:0 auto;
  }
  .title{
    width:100%;
    text-align: left;
    line-height:40px;
    border-bottom: 1px dashed #A89BA6;
    position:relative;
  }
  .title:hover{
    border-bottom: 1px dashed #000;
  }
  .title:hover::before{
    background: #088DE7;
  }
  .title::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 20px;
    margin-left: -4px;
    margin-top: -4px;
    width: 8px;
    height: 8px;
    background: #6BC1FA;
    border-radius: 50%;
  }
  .date{
    width:80px;
    margin-left:10px;
    font-size: 12px;
    float:left;
  }
  .artLink{
    margin-left:100px;
    height:100%;
  }
  
  a{
    text-decoration-line:none;
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
  .article-content{
    width:90%;
  }
  .nav{
    height:40px;
    float:none;
    line-height:40px;
  }
  .infoShow,.infoHide{
      padding-right:0;
      animation: none;
    }
}
</style>