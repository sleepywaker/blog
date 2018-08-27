<template>
  <div>
    <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="page-content">
          <div class="tag-content">
            <div class="tagStyle">JavaScript</div>
            <div class="itemStyle">
              <ul>
              <li v-for="item in artList" v-if="item.tag=='js'" ><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
              </ul>
            </div>
          </div>
          <div class="tag-content">
            <div class="tagStyle">css</div>
              <div class="itemStyle">
                <ul>
                <li v-for="item in artList" v-if="item.tag=='css'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
                </ul>
              </div>
          </div>
          <div class="tag-content">
            <div class="tagStyle">vue</div>
              <div class="itemStyle">
                <ul>
                <li v-for="item in artList" v-if="item.tag=='vue'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
                </ul>
              </div>
          </div>
          <div class="tag-content">
            <div class="tagStyle">HTML</div>
              <div class="itemStyle">
                <ul>
                <li v-for="item in artList" v-if="item.tag=='html'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
                </ul>
              </div>
          </div>
          <div class="tag-content">
            <div class="tagStyle">杂文</div>
              <div class="itemStyle">
                <ul>
                <li v-for="item in artList" v-if="item.tag=='other'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
                </ul>
              </div>
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
    .page-content{
      min-height:calc(100vh - 220px);
      box-sizing:border-box;
      width:100%;
      background-color:#BBE4FF;
      padding-bottom:30px;
      text-align: left;
    }
    .tag-content{
      width:60%;
      margin:0 auto;
      padding-top:20px;
      padding-left:20px;
      padding-right:20px;
    }
    .tagStyle{
      width:100px;
      height:30px;
      line-height:30px;
      background-color: #6BC1FA;
      text-align: left;
      font-weight: 600;
    }
    li{
      margin-top:20px;
      padding-bottom:10px;
      padding-left:10px;
      width:100%;
      height:100%;
      border-bottom:1px dashed #8C97A7;
      position:relative;
    }
    a{
      text-decoration: none;
    }
    li:hover{
      border-bottom:1px dashed #000;
    }
    li::before {
      content: " ";
      position: absolute;
      left: 0;
      top:8px;
      margin-left: -4px;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      background: #6BC1FA;
      border-radius: 50%;
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
    .tag-content{
      width:80%;
      margin:0 auto;
      padding-top:20px;
      padding-left:20px;
      padding-right:20px;
    }
    .infoShow,.infoHide{
      padding-right:0;
      animation: none;
    }
  }
  </style>