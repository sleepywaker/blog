<template>
    <div>
      <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
      <Header/>
      <div class="archive">
          <div class="article-content"> 
              <h1>{{artList.title}}</h1>
              <p>样式文件命名规范
                  主要：master.css, style.css, main.css
                  布局：layout.css
                  专栏：columns.css
                  文字：font.css
                  打印：print.css
                  主题：themes.css
                  
                  CSS ID 的命名
                  页头：header                                             登录条：loginbar                     
                  标志：logo                                               侧栏：sidebar           
                  广告：banner                                             导航：nav     
                  子导航：subnav                                           菜单：menu  
                  子菜单：submenu                                          搜索：search 
                  滚动：scroll                                               页面主体：main
                  内容：content                                             标签页：ta
                  文章列表：list                                             提示信息：ms
                  小技巧：tips                                               栏目标题：title
                  加入：joinus                                               指南：guild
                  服务：service                                              热点：ho
                  新闻：news                                               下载：download
                  注册：regsiter
                  状态：status                                               按钮：btn
                  投票：vote                                                合作伙伴：partner
                  友情链接：friendlink                                        页脚：footer
                  版权：copyright                                            外套：wrap
                  主导航：mainnav                                           子导航：subnav
                  页脚：footer                                               整个页面：content
                  页眉：header                                              页脚：footer
                  商标：label                                                标题：title
                  主导航：mainbav（globalnav）                               顶导航：topnav
                  边导航：sidebar                                            左导航：leftsidebar
                  右导航：rightsidebar                                        旗志：logo
                  标语：banner                                              菜单内容1：menu1content菜单容量：menucontainer                                  子菜单：submenu
                  边导航图标：sidebarIcon                                   注释：note
                  面包屑：breadcrumb(即页面所处位置导航提示）              容器：container
                  内容：content                                            搜索：search
                  登陆：Login                                        功能区：shop(如购物车，收银台)
                  当前的：current
                  
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
          this.artList=articles.art3; 
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