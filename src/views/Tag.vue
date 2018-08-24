<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="tech">
          <div class="article-content">
            <div>JS</div>
              <ol>
              <li v-for="item in artList" v-if="item.tag=='js'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
              </ol>
          </div>
          <div>
            <div>css</div>
              <ol>
                  <li v-for="item in artList" v-if="item.tag=='css'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
              </ol>
          </div>
          <div>
            <div>vue</div>
              <ol>
                <li v-for="item in artList" v-if="item.tag=='vue'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
              </ol>
          </div>
          <div>
              <div>HTML</div>
                <ol>
                  <li v-for="item in artList" v-if="item.tag=='html'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
                </ol>
            </div>
            <div>
                <div>杂文</div>
                  <ol>
                    <li v-for="item in artList" v-if="item.tag=='other'"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
                  </ol>
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
    .tech{
      min-height:calc(100vh - 210px);
      box-sizing:border-box;
      width:100%;
      background-color:#BBE4FF;
      color:#fff;
    }
    .title{
      display:block;
    }
    .article-content{
  width:60%;
  margin:0 auto;
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
  </style>