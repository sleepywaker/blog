<template>
  <div>
    <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
        <div class="article-content"> 
          <p class="fontA">{{artList.title}}</p>
          <p>{{artList.date}}</p>
          <p class="fontC">样式文件命名规范</p>
          <p> 1、主要：master.css, style.css, main.css </p> 
          <p> 2、布局：layout.css</p> 
          <p> 3、专栏：columns.css</p>
          <p> 4、文字：font.css</p>
          <p> 5、打印：print.css</p>
          <p> 6、主题：themes.css</p>
          <br>  
          <p class="fontC"> CSS ID 的命名</p> 
          <div class="fontD">
            <span>页头：header</span><span>标志：logo </span><span>登录条：loginbar</span><span>侧栏：sidebar</span><span>广告：banner </span>
            <span>子导航：subnav</span><span>子菜单：submenu </span><span>滚动：scroll </span><span>内容：content </span><span>文章列表：list </span>
            <span>小技巧：tips </span><span>加入：joinus  </span><span>服务：service </span><span>导航：nav  </span><span>菜单：menu  </span>
            <span> 搜索：search </span><span>页面主体：main</span><span>标签页：tag</span><span>提示信息：ms</span><span>栏目标题：title</span>
            <span>指南：guild</span><span>新闻：news</span><span>注册：regsiter</span><span>状态：status</span><span>投票：vote </span>
            <span>友情链接：friendlink </span><span>版权：copyright </span><span>主导航：mainnav</span><span>页脚：footer</span><span>页眉：header</span>
            <span>下载：download</span><span>按钮：btn</span><span>合作伙伴：partner</span><span> 页脚：footer</span><span>外套：wrap</span>
            <span>子导航：subnav</span><span> 整个页面：content</span><span>标题：title</span><span> 顶导航：topnav</span><span>左导航：leftsidebar</span>
            <span>商标：label   </span><span> 主导航：mainbav（globalnav）</span><span> 标语：banner</span><span>边导航图标：sidebarIcon</span><span>菜单容量：menucontainer  </span>
            <span>面包屑：breadcrumb(即页面所处位置导航提示）</span><span>登陆：Login  </span><span>当前的：current</span><span>功能区：shop(如购物车，收银台)</span>
          </div> 
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
          this.artList=articles.art3; 
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
  .fontD span{
    display:block;
  }
  </style>