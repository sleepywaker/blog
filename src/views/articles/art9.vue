<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <h1>{{artList.title}}</h1>
              <p>Vuex是一个专门为vue.js应用程序开发的状态管理模式（data函数内的变量称为状态）。

                  当构建一个大中型的单页面应用程序时，Vuex可以更好的帮助我们在组件外部统一管理状态。（可以理解为生成全局变量）
                  
                  Vuex核心概念
                  State ：State是唯一的数据源，单一状态树
                  Getters：通过getters可以派生出一些新的状态，基于state进行操作
                  Mutations：更改vuex的store中的状态的唯一方法是提交mutation
                  Actions：Action提交的是mutation，而不是直接变更状态；Action可以包含任意异步操作
                  Modules：面对复杂的应用程序，当管理的状态比较多时，我们需要将vuex的store对象分割成模块（modules）
                  
                  // 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
                  
                  const store = new Vuex.Store({
                    state: {
                      count: 0
                    },
                    mutations: {
                      increment (state) {
                        state.count++
                      }
                    }
                  })
                  
                  现在，你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：
                  
                  store.commit('increment')
                  
                  console.log(store.state.count) // -> 1
                  
                  
              </p>
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
  import articles from './../../assets/articles.json'
    export default {
      data(){
        return {
          artList:'',
        }
      },
      mounted(){
        this.getArticle()
      },
      components:{
        Header,
        Footer,
        Siteinfo
      },
      methods:{
        getArticle(){
          this.artList=articles.art9; 
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
      color:#fff;
    }
    .title{
      display:block;
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