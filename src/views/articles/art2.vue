<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <h1>{{artList.title}}</h1>
              <p>HTML语义化
                  所谓语义就是对符号的一种共识，被认可的程度越高、范围越广，人们就越可以依赖它实现各种各样的功能，在实际应用中表现为针对不同的html内容使用不同标签。
                  使用语义化标签，一方面能够使html结构清晰，便于维护，另一方面有利于搜索引擎更好的进行抓取，提升流量。
                  语义化标签：        
                  （html5旧的行内元素都被归类为短语内容）
                      通用容器：div——块级通用容器；span——短语内容无语义容器。
                      如果语义不合适，也不要霸王硬上弓，=。。 =老实的用div吧。
                  &lt; title&gt;&lt;/title&gt;：简短、描述性、唯一（提升搜索引擎排名）。
                  搜索引擎会将title作为判断页面主要内容的指标，有效的title应该包含几个与页面内容密切相关的关键字，建议将title核心内容放在前60个字符中。
                  &lt;hn&gt;&lt;/hn&gt;：h1~h6分级标题，用于创建页面信息的层级关系。对于搜索引擎而言，如果标题与搜索词匹配，这些标题就会被赋予很高的权重，尤其是h1。
                  &lt;header&gt;&lt;/header&gt;：页眉通常包括网站标志、主导航、全站链接以及搜索框。也适合对页面内部一组介绍性或导航性内容进行标记。
                  &lt;nav&gt;&lt;/nav&gt;：标记导航，仅对文档中重要的链接群使用。html5规范不推荐对辅助性页脚链接使用nav，除非页脚再次显示顶级全局导航、或者包含招聘信息等重要链接。
                  &lt;main&gt;&lt;/main&gt;：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。
                  &lt;article&gt;&lt;/article&gt;：包含像报纸一样的内容= =||是这么理解的，表示文档、页面、应用或一个独立的容器。article可以嵌套article，只要里面的article与外面的是部分与整体的关系。
                  &lt;section&gt;&lt;/section&gt;：具有相似主题的一组内容，比如网站的主页可以分成介绍、新闻条目、联系信息等条块。  如果只是为了添加样式，请用div！
                  &lt;aside&gt;&lt;/aside&gt;：指定附注栏，包括引述、侧栏、指向文章的一组链接、广告、友情链接、相关产品列表等。如果放在main内，应该与所在内容密切相关。
                  &lt;footer&gt;&lt;/footer&gt;：页脚，只有当父级是body时，才是整个页面的页脚。
                  &lt;small&gt;&lt;/small&gt;：指定细则，输入免责声明、注解、署名、版权。只适用于短语，不要用来标记“使用条款”、“隐私政策”等长的法律声明。
                  &lt;strong&gt;&lt;/strong&gt;：表示内容重要性。
                  &lt;em&gt;&lt;/em&gt;：标记内容着重点（大量用于提升段落文本语义）。
                  &lt;mark&gt;&lt;/mark&gt;：突出显示文本（yellow），提醒读者。在HTML5中em是表示强调的唯一元素，而strong则表示重要程度。
                  &lt;b&gt;&lt;/b&gt;：出于实用目的提醒读者的一块文字，不传达任何额外的重要性
                  &lt;i&gt;&lt;/i&gt;：不同于其他文字的文字
                  &lt;figure&gt;&lt;/figure&gt;：创建图（默认有40px左右margin）。
                  &lt;figcaption&gt;&lt;/figcaption&gt;：figure的标题，必须是figure内嵌的第一个或者最后一个元素。
                  &lt;cite&gt;&lt;/cite&gt;：指明引用或者参考，如图书的标题，歌曲、电影、等的名称，演唱会、音乐会、规范、报纸、或法律文件等。只用于参考源本身，而不是从中引述。
                  &lt;blockquoto&gt;&lt;/blockquoto&gt;：引述文本，默认新的一行显示。
                  &lt;q&gt;&lt;/q&gt;：短的引述（跨浏览器问题，尽量避免使用）。可以对blockquoto和q元素使用cite属性（不是cite元素！），对搜索引擎自动化工具有用。cite=“URL”引述来源地址。
                  &lt;time&gt;&lt;/time&gt;：标记时间。datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。不再相关的时间用s标签。
                  &lt;abbr&gt;&lt;/abbr&gt;：解释缩写词。使用title属性可提供全称，只在第一次出现时使用就ok。
                  abbr[title]{ border-bottom:1px dotted #000; }
                  &lt;dfn&gt;&lt;/dfn&gt;：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。
                  &lt;address&gt;&lt;/address&gt;：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。如果提供整个页面的作者联系信息，一般放在页面级footer里。不能包含文档或者文档等其他内容。
                  &lt;del&gt;&lt;/del&gt;：移除的内容。
                  &lt;ins&gt;&lt;/ins&gt;：添加的内容。少有的既可以包围块级，又可以包围短语内容的元素。
                  &lt;code&gt;&lt;/code&gt;：标记代码。包含示例代码或者文件名 （&lt; &amp;lt;  &gt; &amp;gt;）
                  &lt;pre&gt;&lt;/pre&gt;：预格式化文本。保留文本固有的换行和空格。
                  &lt;meter&gt;&lt;/meter&gt;：表示分数的值或者已知范围的测量结果,如投票结果。例如：&lt;meter value=&quot;0.2&quot; title=”Miles“&gt;20%completed&lt;/meter&gt;
                  &lt;progress&gt;&lt;/progress&gt;：完成进度。可通过js动态更新value。</p>
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
          this.artList=articles.art2; 
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