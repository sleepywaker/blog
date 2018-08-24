<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <h1>{{artList.title}}</h1>
              <p>break 用来跳出循环，比如需要满足某条件时，停止循环；
                  continue跳过当前迭代，继续循环。
                  //
                  使用appendChild()为一个父节点添加多个子节点,如为ul添加n个li:
                  先定义一个数组,存储生成的li，然后将生成数组循环添加为父元素子节点
                  var arr=[];
                  for(var i=0;i<n;i++){
                  var list=document.createElement(‘li’);
                  arr[i]=list;
                  document.querySelector(‘ul’).appendChild(arr[i]); 
                  }
                  //
                  需要动态获取input输入框内容时，可以在函数加入初始化语句，这样在每次通过后面的语句调用输入框输入值时，只会获取最后一次输入状态的值
                  例：
                  document.querySelector('input').oninput=function (){
                  document.querySelector('ul').innerHTML='';
                      var newNode=document.createElement('li');
                      newNode.innerHTML=document.querySelector('input').value;
                      document.querySelector('ul').appendChild(newNode);   
                  }
                  不添加document.querySelector('ul').innerHTML=''时，
                  每输入一次，ul都会添加一个子节点li，添加后只会生成一个以最后一次输入值为内容的li节点。
                  //
                  setAttribue设置的属性，需要用getAttribute获取
                  //
                  鼠标滑入添加子元素，滑出移除子元素
                  for(var i=0;i<tds.length;i++){
                          tds[i].onmouseover=function(){ 
                              this.appendChild(icon);
                              this.onmouseout=function(){ 
                                  this.removeChild(icon);
                              }
                          }
                  }
                  当鼠标在子元素icon上时，会触发mouseout事件，然后不断在out与over之间循环，
                  解决方法mouseover/mouseout换成mouseenter/mouseleave
                      tds[i].onmouseenter=function(){ 
                              this.appendChild(icon);
                              this.onmouseleave=function(){ 
                                  this.removeChild(icon);
                  ｝
                  ｝
                  
                  //
                  关注事件冒泡，避免父元素与子元素应用相同的事件触发方法
                  //
                  window.location.hash在firefox下中文自动转码为UTF-8问题
                  1.window.location.hash
                  　　window.location.hash这个属性主要是读取和写入网页位置的，我们经常会用来控制网页单页面跳转或者是控制网页位置。然而这个属性在firefox下遇到中文时却会被自动转码为UTF－8,这是火狐等相似浏览器对中文url的一些处理的不同。以下介绍一个方法可以fixed掉这个问题。
                  2.解码函数
                  　　前面已经提到，firefox喜欢帮我们把中文转换成utf－8的编码格式，那么我们只用使用合适的解码函数对其解码皆可。
                        javascript中有三个编码函数escape,encodeURI,encodeURIComponent，而其对应相应解码函数分别为：unescape,decodeURI,decodeURIComponent。
                  　　因为其只会匹配相应编码的字符串，所以我们可以大胆的使用解码函数，不用担心未编码的字符串解码出奇怪的数据。
                  　　只需做如下处理便能解决这个问题：
                  var hash =decodeURIComponent(window.location.hash);
                  
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
          this.artList=articles.art5; 
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