<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <h1>{{artList.title}}</h1>
              <p>布局模型
                  1、	流动模型（flow）默认的
                  块元素独占一行，自上而下分布
                  行内元素自左到右分布
                  2、	浮动模型（float）
                  块元素浮动后，不会独占一行
                  3、	层模型（layer）
                  （1）相对定位relative
                  通过left、right、top、bottom确定在正常文档流中相对自身的偏移位置，偏移后任占据偏移前的空间，偏移后的元素可以覆盖文档流。
                  （2）绝对定位absolute
                        相对于具有定位属性的父包含块进行定位（不存在父包含块时，相当于body元素，即浏览器窗口），脱离文档流，在文档流中不占据空间，覆盖文档流。
                  （3）固定定位fixed
                      相对浏览器视图位置，不会随浏览器窗口滚动条滚动而变化，不受文档流影响。
                  
                  z-index
                  可以通过z-index设置position属性值为 relative 或 absolute 或 fixed的元素堆叠顺序，没有定位属性的对象设置z-index无效。
                  如果父元素z-index有效，子元素z-index（设置无效）与父元素保持一致，并会在父元素上方。
                  如果两个元素都未设置z-index值，一个有定位属性，一个没有，那么有定位属性的元素会覆盖无定位属性的元素。
                  如果都有定位属性，并且z-index值相同，按文档流顺序，后面的覆盖前面的。
                  
                  对齐
                  水平
                  行内元素水平居中：父元素text-align：center 子元素display：inline-block；
                  定宽块元素水平居中：margin:0 auto;
                  不定宽块元素：父元素text-align：center 子元素display：inline-block；
                  
                  垂直居中（前提条件：父元素是盒子容器且高度已经设定）
                  行内：设置line-height=父容器高度；
                  高度不确定块元素：父元素设定：display：table-cell；vertical-align：middle；
                  高度固定块元素：margin-top（或margin-bottom）=（父元素高度-子元素高度）/ 2；
                  
                  
                  水平垂直
                  1、单行文本text-align：center ；height=lineheight；
                  2、父元素设置text-align：center；display：table-cell；vertical-align：middle； 子元素display：inline-block；
                  
                  3.3相对+绝对定位
                  使用absolute，利用绝对定位元素的盒模型特性，在偏移属性为确定值的基础上，设置margin:auto
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
          this.artList=articles.art1; 
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
    .article-content{
      width:60%;
      margin:0 auto;
      margin-bottom:40px;
    }
  
  </style>