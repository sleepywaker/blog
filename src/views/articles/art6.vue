<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <p class="fontA">{{artList.title}}</p>
              <p>{{artList.date}}</p>
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
             <p>     如果 a 大于 b，则上面的代码将退出函数，并不会计算 a 和 b 的总和。</p>
                  
              <p class="fontE">   局部 JavaScript 变量</p> 
              <p>   在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
                  您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。
                  只要函数运行完毕，本地变量就会被删除。</p> 
                  
               <p class="fontE">  全局 JavaScript 变量</p> 
              <p> 在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。
                  
                  JavaScript 变量的生存期
                  JavaScript 变量的生命期从它们被声明的时间开始。
                  局部变量会在函数运行以后被删除。
                  全局变量会在页面关闭后被删除。
                  
                  向未声明的 JavaScript 变量来分配值
                  如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。
                  这条语句：carname="Volvo";
                  将声明一个全局变量 carname，即使它在函数内执行。
                  模拟函数重载  
                  用 arguments 对象判断传递给函数的参数个数，即可模拟函数重载：</p>
               <p>  function doAdd() {</p> 
               <p class="left20">     if(arguments.length == 1) {</p>
               <p class="left40">     alert(arguments[0] + 5);</p>  
               <p class="left40">     } else if(arguments.length == 2) {</p>
                <p class="left40">      alert(arguments[0] + arguments[1]);</p>
               <p class="left20">     }</p>
                <p>  }</p>
                  
              <p>   doAdd(10);	//输出 "15"</p> 
               <p>  doAdd(40, 20);	//输出 "60"</p> 
                  
               <p>   函数名只是指向函数对象的引用值，行为就像其他对象一样。,甚至可以使两个变量指向同一个函数.
                  var doAdd = new Function("iNum", "alert(iNum + 10)");
                  var alsodoAdd = doAdd;
                  doAdd(10);	//输出 "20"
                  alsodoAdd(10);	//输出 "20"
                  在这里，变量 doAdd 被定义为函数，然后 alsodoAdd 被声明为指向同一个函数的指针。用这两个变量都可以执行该函数的代码，并输出相同的结果 - "20"。因此，如果函数名只是指向函数的变量，那么可以把函数作为参数传递给另一个函数吗？回答是肯定的！
                </p>  
              <p>  function callAnotherFunc(fnFunction, vArgument) {</p>
                <p class="left20">   fnFunction(vArgument);</p> 
               <p>  }</p> 
               <p>  var doAdd = new Function("iNum", "alert(iNum + 10)");</p> 
              <p>    callAnotherFunc(doAdd, 10);	//输出 "20"</p>
              <p>   在上面的例子中，callAnotherFunc() 有两个参数 - 要调用的函数和传递给该函数的参数。这段代码把 doAdd() 传递给 callAnotherFunc() 函数，参数是 10，输出 "20"。
                  注意：尽管可以使用 Function 构造函数创建函数，但最好不要使用它，因为用它定义函数比用传统方式要慢得多。不过，所有函数都应看作 Function 类的实例。
               </p>    
              <p>   Function 对象也有与所有对象共享的 valueOf() 方法和 toString() 方法。这两个方法返回的都是函数的源代码，在调试时尤其有用。例如：</p> 
                  
             <p> function doAdd(iNum) {</p> 
              <p class="left20">     alert(iNum + 10);</p> 
              <p>    }</p>
                  
              <p>    document.write(doAdd.toString());</p>
               <p>  //输出function doAdd(iNum) { alert(iNum + 10); }</p> 
              <br>
                 <p class="fontE"> 闭包</p>
                <p>  闭包（closure），指的是词法表示包括不被计算的变量的函数，也就是说，函数可以使用函数之外定义的变量。
                  复杂的闭包实例。
                  在一个函数中定义另一个会使闭包变得更加复杂。例如：</p> 
                <p> var iBaseNum = 10;</p> 
                <p> function addNum(iNum1, iNum2) {</p> 
                 <p class="left20">   function doAdd() { </p>
                 <p class="left20">    return iNum1 + iNum2 + iBaseNum;</p> 
                 <p class="left20">   }</p>
                 <p class="left20">  return doAdd();</p> 
                 <p>}</p> 
               <p>   这里，函数 addNum() 包括函数 doAdd() （闭包）。内部函数是一个闭包，因为它将获取外部函数的参数 iNum1 和 iNum2 以及全局变量 iBaseNum 的值。 addNum() 的最后一步调用了 doAdd()，把两个参数和全局变量相加，并返回它们的和。
                  
                  这里要掌握的重要概念是，doAdd() 函数根本不接受参数，它使用的值是从执行环境中获取的。
                  
                  可以看到，闭包是 ECMAScript 中非常强大多用的一部分，可用于执行复杂的计算。
                  
                  提示：就像使用任何高级函数一样，使用闭包要小心，因为它们可能会变得非常复杂。</p>
                  
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
          this.artList=articles.art6; 
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