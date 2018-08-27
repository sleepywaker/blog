<template>
    <div class="main">
      <div class="art-container">
        <p class="fontA">{{art7.title}}</p>
        <p class="fontE">{{art7.date}}</p>
        <p>一、封装性</p>

                 <p>  封装就是把抽象出来的数据和对数据的操作封装在一起，数据被保护在内部，程序的其它部分只有通过被授权的操作(成员方法)，才能对数据进行操作。
                  
                  　 JS封装只有两种状态，一种是公开的，一种是私有的。
                      案例：</p>
              <p>    function Person(name,sal){</p>
             <p>       this.name=name;         //公开</p>  
               <p>     var sal=sal;                 //私有</p>  
               <p>      this.showInfo=function(){ //公开</p> 
               <p>          window.alert(this.name+" "+sal);</p> 
               <p>      }</p> 
                <p>      function showInfo2(){      //把函数私有化</p>
                <p>        window.alert("你好"+this.name+" "+sal);</p>  
                <p>      }</p>
                <p>  }</p>
 
                 <p>  通过构造函数来分配成员方法，给每个对象分配一份独立的代码。这样的弊端就是如果对象实例有很多，那函数的资源占用就会很大，而且有可能造成内存泄漏。
                  通过prototype给所有的对象添加方法，但是这种方式不能去访问类的私有变量和方法。</p>
                  
        <router-link to="art7" class="read-whole">阅读全文>></router-link>
      </div>
      <div class="art-container">
          <p class="fontA">{{art8.title}}</p>
          <p class="fontE">{{art8.date}}</p>
          <p>    1、安装插件</p> 
          <p>   npm install vue-lazyload – save</p> 
           <p>   2、“src/main.js”引入插件,并使用use，设置参数（loading时显示图片）</p>
           <p>  import VueLazyLoad from &#x27;vue-lazyload&#x27;</p> 
            <p>  Vue.use(VueLazyLoad,{</p>
         <p>     loading:&quot;/static/loading-svg/loading-bars.svg&quot;</p>  
          <router-link to="art8" class="read-whole">阅读全文>></router-link>
      </div>
      <div class="art-container">
          <p class="fontA">{{art9.title}}</p>
          <p class="fontE">{{art9.date}}</p>
          <p>Vuex是一个专门为vue.js应用程序开发的状态管理模式（data函数内的变量称为状态）。

              当构建一个大中型的单页面应用程序时，Vuex可以更好的帮助我们在组件外部统一管理状态。（可以理解为生成全局变量）
              
              Vuex核心概念
              State ：State是唯一的数据源，单一状态树
              Getters：通过getters可以派生出一些新的状态，基于state进行操作
              Mutations：更改vuex的store中的状态的唯一方法是提交mutation
              Actions：Action提交的是mutation，而不是直接变更状态；Action可以包含任意异步操作
              Modules：面对复杂的应用程序，当管理的状态比较多时，我们需要将vuex的store对象分割成模块（modules）
              </p>
          <router-link to="art9" class="read-whole">阅读全文>></router-link>
      </div>
  </div>
  </template>
  
  <script>
  import '@/assets/css/articles.css'
  import articles from '@/assets/articles.json'
  export default {
    data(){
      return {
        art7:'',
        art8:'',
        art9:''
      }
    },
    methods:{
        getArt(){
          this.art7=articles.art7;
          this.art8=articles.art8;
          this.art9=articles.art9;
        }
    },
    mounted(){
        this.getArt();
    },
  }
  </script>
  <style scoped>
  .main{
    width:60%; 
    margin:0 auto;
  }
  .art-container{ 
    text-align: left;
    padding-bottom:30px;
    border-bottom:1px dashed #000;
  }
  .read-whole{
    margin-top:10px;
  }
  a{
    display:inline-block;
    margin-right:20px;
  }
  @media screen and (max-width:800px){
    .main{
      width:80%;
      margin:0 auto;
      border-bottom:1px dashed #000;
    }
  }
  </style>