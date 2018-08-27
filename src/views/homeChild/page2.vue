<template>
    <div class="main">
      <div class="art-container">
          <p class="fontA">{{art4.title}}</p>
          <p class="fontE">{{art4.date}}</p>
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
        <router-link to="art4" class="read-whole">阅读全文>></router-link>
      </div>
      <div class="art-container">
          <p class="fontA">{{art5.title}}</p>
          <p class="fontE">{{art5.date}}</p>
          <p class="fontC"> break 用来跳出循环，比如需要满足某条件时，停止循环；
              continue跳过当前迭代，继续循环。
          </p>
          <br>
          <p class="fontC">需要动态获取input输入框内容时，可以在函数加入初始化语句，这样在每次通过后面的语句调用输入框输入值时，只会获取最后一次输入状态的值
        
              每输入一次，ul都会添加一个子节点li，添加后只会生成一个以最后一次输入值为内容的li节点。</p>
          <router-link to="art5" class="read-whole">阅读全文>></router-link>
      </div>
      <div class="art-container">
          <p class="fontA">{{art6.title}}</p>
          <p class="fontE">{{art6.date}}</p>
            <p class="fontE">函数</p>
              <p> 调用带参数的函数</p> 
               <p>   在调用函数时，您可以向其传递值，这些值被称为参数。</p>
               <p>   这些参数可以在函数中使用。</p>
               <p>   您可以发送任意多（ECMAScript最多 25 个）的参数，由逗号 (,) 分隔：</p>
               <p>   myFunction(argument1,argument2)</p>
               <p>  变量和参数必须以一致的顺序出现。第一个变量就是第一个被传递的参数的给定的值，以此类推</p> 
                  
               <p>  带有返回值的函数</p> 
                <p> 有时，我们会希望函数将值返回调用它的地方。</p> 
               <p>   通过使用 return 语句就可以实现。</p>
               <p>   在使用 return 语句时，函数会停止执行，并返回指定的值。</p>
               <p>  在您仅仅希望退出函数时 ，也可使用 return 语句。返回值是可选的：</p> 
               <p>  function myFunction(a,b){</p> 
               <p class="left20">  if (a>b){</p> 
                <p class="left40">   return;</p> 
               <p class="left20">     }</p>
               <p class="left20">   x=a+b</p>
              <p>    }</p>
             <p> 如果 a 大于 b，则上面的代码将退出函数，并不会计算 a 和 b 的总和。</p>    
          <router-link to="art6" class="read-whole">阅读全文>></router-link>
      </div>
  </div>
  </template>
  
  <script>
  import '@/assets/css/articles.css'
  import articles from '@/assets/articles.json'
  export default {
    data(){
      return {
        art4:'',
        art5:'',
        art6:''
      }
    },
    methods:{
        getArt(){
          this.art4=articles.art4;
          this.art5=articles.art5;
          this.art6=articles.art6;
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