<template>
        <div>
          <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
          <Header/>
          <div class="archive">
              <div class="article-content"> 
                  <p class="fontA">{{artList.title}}</p>
                  <p>{{artList.date}}</p>
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
                  
                <p> 原型继承</p> 
              <p>   function A(){  </p> 
               <p>       this.color = 'red';  </p>
                <p> }  </p> 
              <p>    function B(){}  </p>
               <p>   function C(){}  </p>
              <p>    B.prototype = new A();  </p>
              <p>    C.prototype = new B(); </p> 
            <p>     // 测试原型继承 </p>  
             <p>    var c = new C();</p>   
              <p>    console.log(c.color); // red </p>
                  
             <p>     原型继承显得很简单，不需要每次构造都调用父类的构造函数，也不需要通过复制属性的方式就能快速实现继承。但它也存在一些缺点：
                  ① 每个类型只有一个原型，所以不支持多重继承（即一个子类继承自多个父类）。
                  ② 不能很好的支持多参数或动态参数的父类，显得不够灵活。
                  ③ 占用内存多，每次继承都需要实例化一个父类，这样会存在内存占用过多的问题。</p>
                  
               <p>  混合继承（构造+原型）</p> 
                  
               <p>   混合继承是把多种继承方式一起使用，发挥各个优势，来实现各种复杂的应用。
                  最常见的就是把类继承和原型继承一起使用。做法是将需要独立的属性方法放入构造函数中，而可以共享的部分则放入原型中，这样做可以最大限度节省内存而又保留对象实例的独立性。注意：
                  1、把方法写在原型中比写在构造函数中消耗的内存更小，因为在内存中一个类的原型只有一个，写在原型中的行为可以被所有实例共享，实例化的时候并不会在实例的内存中再复制一份
                  而写在类中的方法，实例化的时候会在每个实例中再复制一份，所以消耗的内存更高。
                  所以没有特殊原因，我们一般把属性写到类中，而行为写到原型中。
                  2、构造函数中定义的属性和方法比原型中定义的属性和方法的优先级高，如果定义了同名称的属性和方法，构造函数中的将会覆盖原型中的。</p>
               <p>  function A(x,y){  </p> 
                <p>    this.x = x; </p>   
                <p>     this.y = y;  </p> 
               <p> }  </p>  
               <p>  A.prototype.add = function(){ </p>  
                <p>     return (this.x-0) + (this.y-0); </p>  
                <p> } </p>  
               <p>  function B(x,y){ </p>  
                 <p>    A.call(this,x,y); </p>  
                <p>  }  </p>
                <p>  B.prototype = new A(); </p> 
                  
                <p> // 测试 </p>  
                <p>  var b = new B(2,1);</p>  
                 <p> console.log(b.x); // 2 </p> 
                 <p>console.log(b.add()); // 3</p> 
                  
                  
                 <p>多重继承</p> 
                  
                 <p>继承一般包括单向继承和多向继承，单向继承模式较为简单，每个子类有且仅有一个超类，多重继承是一个比较复杂的继承模式。一个子类可拥有多个超类。JavaScript原型继承不支持多重继承，但可通过混合模式来实现多重继承。下面让类C来继承类A和类B：
                  复制代码</p> 
                 <p> function A(x){ </p> 
                  <p>    this.x = x;  </p>
                 <p>}</p>   
                 <p> A.prototype.hi = function(){ </p> 
                  <p>    console.log('hi'); </p> 
                 <p>}  </p> 
                 <p>function B(y){ </p>  
                  <p>  this.y = y;  </p>  
                  <p> } </p> 
                 <p>  B.prototype.hello = function(){</p>  
                   <p>   console.log('hello'); </p> 
                  <p> } </p> 
                <P>  // 给Function增加extend方法  </P>
                 <p> Function.prototype.extend = function(obj) {</p>  
                  <p>    for(var item in obj) {  </p>
                  <p>      this.constructor.prototype[item] = obj[item];</p>    
                  <p>   }  </p> 
                 <p> } </p> 
                 <p> / 在类C内部实现继承</p>  
                 <p> function C(x,y){  </p>
                 <p>    A.call(this,x); </p>  
                  <p>    B.call(this,y);</p>  
                 <p> };</p>  
                 <p> C.extend(new A(1));</p>  
                <p>  C.extend(new B(2)); </p> 
                  
                 <p>// 通过复制继承后，C变成了一个对象，不再是构造函数了，可以直接调用 </p>  
                <p> C.hi(); // hi  </p> 
               <p> C.hello(); // hello</p>    
                 <p> console.log(C.x); // 1 </p> 
                 <p> console.log(C.y); // 2  </p>
                 <p>复制代码</p> 
                <p> 在js中实现类继承，需要设置3点：</p> 
                  
              <p>   ① 在子类构造函数结构体内，使用函数call()调用父类构造函数，把子类的参数传递给调用函数如上面的例子：A.call(this,x) 这样子类可以继承父类的所有属性和方法。
                  ② 在子类和父类之间建立原型链，如上例：B.prototype = new A() 为了实现类的继承必须保证他们原型链上的上下级关系。即设置子类的prototype 属性指向父类的一个实例即可。
                  ③ 恢复子类原型对象的构造函数， 如上例：B.prototype.constructor = B 
                  在类继承中，call() 和 apply() 方法被频繁使用，它们之间的功能和用法都是相同的，唯一区别就是第2个参数类型不同。</p> 
                  
                  
              <p>  js如何实现重载</p>  
                  
              <p>   复制代码</p> 
              <p>  //js怎么实现重载.通过判断参数的个数来实现重载</p>   
               <p>  function Person(){ </p> 
                <p>      this.test1=function (){ </p>
                 <p>      if(arguments.length==1){ </p>   
                  <p>           this.show1(arguments[0]); </p> 
                   <p>    }else if(arguments.length==2){ </p>   
                    <p>        this.show2(arguments[0],arguments[1]);</p>   
                    <p>    }else if(arguments.length==3){ </p>  
                       <p>      this.show3(arguments[0],arguments[1],arguments[2]);</p>  
                      <p>   } </p> 
                     <p>}</p>  
                    <p>  this.show1=function(a){ </p>
                     <p>    window.alert("show1()被调用"+a);</p>  
                     <p> } </p>
                     <p> this.show2=function(a,b){ </p>
                        <p> window.alert("show2()被调用"+"--"+a+"--"+b);</p>  
                    <p>} </p> 
                     <p> function show3(a,b,c){ </p>
                    <p>    window.alert("show3()被调用"); </p>  
                    <p>  } </p>
                 <p> }</p> 
                <p> var p1=new Person(); </p> 
                <p> //js中不支持重载. </p>
                 <p> p1.test1("a","b"); </p>
                <p> p1.test1("a");</p> 
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
              this.artList=articles.art7; 
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