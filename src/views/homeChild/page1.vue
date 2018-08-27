<template>
  <div class="main">
    <div class="art-container">
      <p class="fontA">{{art1.title}}</p>
      <p class="fontE">{{art1.date}}</p>
      <p class="fontB">布局模型有以下几种：</p>
      <p class="fontC"> 1、流动模型（flow）</p>
      <p class="fontD"> &nbsp&nbsp&nbsp&nbsp默认的块元素独占一行，自上而下分布，行内元素自左到右分布</p>
      <p class="fontC"> 2、浮动模型（float）</p>
      <p class="fontD"> &nbsp&nbsp&nbsp&nbsp块元素浮动后，不会独占一行</p>
      <p class="fontC">3、层模型（layer）</p>
      <p class="fontC">（1）相对定位relative</p> 
      <p class="fontD">&nbsp&nbsp&nbsp&nbsp通过left、right、top、bottom确定在正常文档流中相对自身的偏移位置，偏移后任占据偏移前的空间，偏移后的元素可以覆盖文档流。</p>
      <p class="fontC">（2）绝对定位absolute</p>
      <p class="fontD"> &nbsp&nbsp&nbsp&nbsp相对于具有定位属性的父包含块进行定位（不存在父包含块时，相当于body元素，即浏览器窗口），脱离文档流，在文档流中不占据空间，覆盖文档流。</p>
      <p class="fontC">（3）固定定位fixed</p> 
      <p class="fontD">&nbsp&nbsp&nbsp&nbsp相对浏览器视图位置，不会随浏览器窗口滚动条滚动而变化，不受文档流影响。</p>
      <router-link to="art1" class="read-whole">阅读全文>></router-link>
    </div>
    <div class="art-container">
        <p class="fontA">{{art2.title}}</p>
        <p class="fontE">{{art2.date}}</p>
        <p class="fontC">&nbsp&nbsp&nbsp&nbsp所谓语义就是对符号的一种共识，被认可的程度越高、范围越广，人们就越可以依赖它实现各种各样的功能，在实际应用中表现为针对不同的html内容使用不同标签。
          使用语义化标签，一方面能够使html结构清晰，便于维护，另一方面有利于搜索引擎更好的进行抓取，提升流量。
          语义化标签：（html5旧的行内元素都被归类为短语内容）
          通用容器：div——块级通用容器；span——短语内容无语义容器。</p> 
          <br>
        <p> <span class="fontE"> &lt; title&gt;&lt;/title&gt;：</span> 简短、描述性、唯一（提升搜索引擎排名）。搜索引擎会将title作为判断页面主要内容的指标，有效的title应该包含几个与页面内容密切相关的关键字，建议将title核心内容放在前60个字符中。</p>
        <p> <span class="fontE"> &lt;hn&gt;&lt;/hn&gt;：</span>h1~h6分级标题，用于创建页面信息的层级关系。对于搜索引擎而言，如果标题与搜索词匹配，这些标题就会被赋予很高的权重，尤其是h1。</p>
        <p> <span class="fontE"> &lt;header&gt;&lt;/header&gt;：</span> 页眉通常包括网站标志、主导航、全站链接以及搜索框。也适合对页面内部一组介绍性或导航性内容进行标记。</p>
        <p> <span class="fontE"> &lt;nav&gt;&lt;/nav&gt;：</span>  标记导航，仅对文档中重要的链接群使用。html5规范不推荐对辅助性页脚链接使用nav，除非页脚再次显示顶级全局导航、或者包含招聘信息等重要链接。</p>
        <p> <span class="fontE"> &lt;main&gt;&lt;/main&gt;：</span>页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。</p>
        <router-link to="art2" class="read-whole">阅读全文>></router-link>
    </div>
    <div class="art-container">
        <p class="fontA">{{art3.title}}</p>
        <p class="fontE">{{art3.date}}</p>
          <p class="fontC">样式文件命名规范</p>
          <p> 1、主要：master.css, style.css, main.css </p> 
          <p> 2、布局：layout.css</p> 
          <p> 3、专栏：columns.css</p>
          <p> 4、文字：font.css</p>
          <p> 5、打印：print.css</p>
          <p> 6、主题：themes.css</p>
        <router-link to="art3" class="read-whole">阅读全文>></router-link>
    </div>
</div>
</template>

<script>
import '@/assets/css/articles.css'
import articles from '@/assets/articles.json'
export default {
  data(){
    return {
      art1:'',
      art2:'',
      art3:''
    }
  },
  methods:{
      getArt(){
        this.art1=articles.art1;
        this.art2=articles.art2;
        this.art3=articles.art3;
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
