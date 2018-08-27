<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <p class="fontA"> {{artList.title}}</p>
              <p>{{artList.date}}</p>
              <p class="fontC"> break 用来跳出循环，比如需要满足某条件时，停止循环；
                  continue跳过当前迭代，继续循环。
              </p>
              <br>
              <p class="fontC">需要动态获取input输入框内容时，可以在函数加入初始化语句，这样在每次通过后面的语句调用输入框输入值时，只会获取最后一次输入状态的值
                例：
                <p>$("input:first").oninput=function (){" </p> 
                <p class="left20"> $("ul").innerHTML=' ';</p> 
                <p class="left20"> var newNode=$('&lt;li&gt;&lt;/li&gt;');
                 <p class="left20"> newNode.innerHTML=</p>
                 <p> $("input:first").value;</p> 
                 <p class="left20"> $("ul").appendChild(newNode);   </p>
                 <p> }</p>
             <p class="fontC"> 不添加$("ul").innerHTML=''时，
                  每输入一次，ul都会添加一个子节点li，添加后只会生成一个以最后一次输入值为内容的li节点。</p>
              <br>
               <p class="fontB">setAttribue设置的属性，需要用getAttribute获取</p>
          </div>
      </div>
      <Footer/>
      </div>
      <Siteinfo/>
    </div>
  </template>
    
  <script>
  import './../../assets/css/articles.css'
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
          this.artList=articles.art5; 
        }
      }
    }
  </script>
  <style scoped>
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