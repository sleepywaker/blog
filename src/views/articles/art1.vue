<template>
  <div>
  <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <p class="fontA">{{artList.title}}</p>
              <p>{{artList.date}}</p>
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
              <br>
              <p class="fontC fontE"> z-index: </p> 
              <p lass="fontD">&nbsp&nbsp&nbsp&nbsp可以通过z-index设置position属性值为 relative 或 absolute 或 fixed的元素堆叠顺序，没有定位属性的对象设置z-index无效,z-index值大的元素覆盖小的元素。
                  如果父元素z-index有效，子元素z-index（设置无效）与父元素保持一致，并会在父元素上方。
                  如果两个元素都未设置z-index值，一个有定位属性，一个没有，那么有定位属性的元素会覆盖无定位属性的元素。
                  如果都有定位属性，并且z-index值相同，按文档流顺序，后面的覆盖前面的。</p> 
              <br> 
              <p class="fontC fontE"> 水平对齐
              <p class="fontE"> 行内元素水平居中：</p>
              <p>&nbsp&nbsp&nbsp&nbsp父元素text-align：center 子元素display：inline-block；</p>
              <p class="fontE">定宽块元素水平居中：</p>
              <p> &nbsp&nbsp&nbsp&nbspmargin:0 auto;</p>
              <p class="fontE">不定宽块元素：</p> 
              <p class="fontD">父元素text-align：center 子元素display：inline-block；</p> 
              <p class="fontC fontE">垂直居中</p>
              <p class="fontC">（前提条件：父元素是盒子容器且高度已经设定）</p>
              <p class="fontD">&nbsp&nbsp&nbsp&nbsp1、父元素设置line-height=父容器高度；
                  2、高度不确定块元素：父元素设定：display：table-cell；vertical-align：middle；
                  3、高度固定块元素：margin-top（或margin-bottom）=（父元素高度-子元素高度）/ 2；</p>
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
  import './../../assets/css/articles.css'
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
          this.artList=articles.art1; 
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