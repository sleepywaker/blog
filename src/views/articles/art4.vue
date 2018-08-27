<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <p class="fontA">{{artList.title}}</p>
              <p>{{artList.date}}</p>
              <p class="fontC">现在有一个数组对象,也就是数组元素是对象类型,现在的需求是根据对象的某个属性值,找到该数组对应的元素(对象),比如根据"bianma"=="11",找到对应的"name"为"商品房" : 
                该数组对象数据如下: </p>
                <p>var datas = [        </p>
                <p class="left20">   {                  </p> 
                <p class="left40">   "name": "商品房",   </p>
                <p class="left40">    "bianma": "11"    </p>  
                <p class="left20">   },                  </p> 
                <p class="left20">   {                   </p> 
                <p class="left40">    "name": "商铺",    </p> 
                <p class="left40">    "bianma": "12"     </p> 
                <p class="left20">   }                   </p> 
                <p>]                      </p>
              <p class="fontC"> 我们可以通过对数组进行筛选操作:(filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新数组。)</p>
              <p>var data= datas.filter(function(item){</p> 
              <p class="left20">       return item.bianma == "12";    </p> 
              <p>   });                                 </p> 
              <p> console.log(data); // [{name: "商铺", bianma: "12"}]</p>  
              <p class="fontC">  filter() 方法将匹配元素集合缩减为匹配指定选择器的元素.该方法不改变原数组,返回的是筛选后满足条件的数组.</p>
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
          this.artList=articles.art4; 
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
  .left20{
    margin-left:20px;
  }
  .left40{
    margin-left:40px;
  }
  </style>