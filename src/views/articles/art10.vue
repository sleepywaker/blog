<template>
        <div>
          <div :class="{infoShow:this.$store.state.isInfoShow,infoHide:!this.$store.state.isInfoShow}">
          <Header/>
          <div class="archive">
              <div class="article-content"> 
                  <h1>{{artList.title}}</h1>
                  <div>
                      <br>
                      <p>&nbsp&nbsp&nbsp&nbsp那天夕阳下的奔跑，那是我逝去的青春</p>
                      <br>
                      <hr>
                      <br>
                      <p>&nbsp&nbsp&nbsp&nbsp昨天晚上在网吧门前蹭网，看到一对年轻情侣吵架，突然那个女的指着我说：“你要有他一半帅，我们会吵架？”
                          我刚想说话，突然那个男的又指着我说：“我要有他一半帅，我会看上你？”这TM的，我这蹭个网关我屁事orz
                      </p>
                      <br>
                      <hr>
                      <br>
                      <p>&nbsp&nbsp&nbsp&nbsp今天上网，旺旺突然跳了出来来对我说：“亲，我怀孕了。”哥顿时一惊，心说自己没闯什么祸吧？正发愣，那人又说：“
                          明天去医院检查。”我心想你丫到底是谁，难道还要我陪你去检查，想讹我不成？正琢磨着，那人又说：“只能后天给你发货了”......
                      </p>
                      <br>
                      <hr>
                      <br>
                      <p>
                              &nbsp&nbsp&nbsp&nbsp一个广场大妈曾经告诉我，如果她跳的足够快，她的孤独就追不上她；一位拾荒大叔曾经告诉我，如果他翻垃圾翻得足够仔细，他就能
                          找回曾经的自己；一位刷盘子的大妈曾经告诉我，如果她刷的足够用心，就能洗净自己的灵魂；一位碰瓷的大爷曾经告诉我，只要他演
                          的足够逼真，就能骗过匆匆流逝的时光。
                      </p>
                      <br>
                      <hr>
                      <br>
                      <p>
                              &nbsp&nbsp&nbsp&nbsp有一天晚上我和朋友在街边吃小龙虾，旁边桌的一个小女孩突然问妈妈：“小龙虾不回家，它妈妈担心吗”。我马上停止了手里的动作，多
                          么善良的问题啊，怎么下得了口。这时候老板走过来圆场：小朋友不用担心，它们一家人都在这里。“老板再来两斤。”
                      </p>
                      <br>
                      <hr>
                      <br>
                      <p>
                              &nbsp&nbsp&nbsp&nbsp以前交了一个男朋友，因为我爱听音乐，时常冷落他，在与我多次交涉未果的情况下毅然提出了分手，每每想起这事我总是后悔不已，所以
                          我要奉劝大家一句，不要轻易找男朋友，真的很影响听歌的心情。
                      </P>
                      <br>
                      <hr>
                      <br>
                      <P>
                              &nbsp&nbsp&nbsp&nbsp今天出门坐公交，车来了，一掏兜没零钱，都是50，100的，正一筹莫展之际，一个乞丐站到了我面前，把手里的钱缸伸向了我，晃了晃里
                          面的零钱，我摇摇头，他还是坚持的伸过来再次摇晃钱缸，我被他的执着感动了，就点了点头，从里面拿了两块钱登上了缓缓启动的公交。
                          人间自有真情在，时间还是好人多啊。
                  
                      </P>
                      <br>
                      <hr>
                      <br>
                      <p>
                              &nbsp&nbsp&nbsp&nbsp将近十年了，我自认为是一个作风正派的人，从不抽烟，不乱跟女孩打情骂俏。我也是一个生活习惯良好的男人，晚上从不泡吧逛夜店，
                          9点准时上床睡觉，早上6点准时起床，我性格好，文静，随和，非常听话，直到昨天，这一切都变了，因为，我终于出狱了。
                      </p>
                      <br>
                      <hr>
                      <br>
                      <p>
                              &nbsp&nbsp&nbsp&nbsp曾经打游戏认识一个妹子，我给她买装备，带她刷任务。后来可能她良心发现，告诉我说她其实是个男的，觉得我人挺不错的，要见面
                          当兄弟。见面时却是个美女，我问她为什么骗我，她只是笑笑不说话。然后我们相爱了，结婚的时候我才发现，他当初，并没有骗我。
                      </p>
                      </div>
                      <p>记得17岁那年， 第一次和她接吻 ，快亲上的时候， 她突然说等一下 ，我就纳闷了， 她要干嘛？只见她小心翼翼地从兜里拿出三个糖， 就上好佳那种圆的 ，草莓苹果和荔枝味的 ，她让我挑一个喜欢的， 我指了一下那个荔枝的 ，然后问她干嘛? 她二话不说，马上撕开糖纸 ，就把那颗糖给吃了 ，然后一把扯过我的脖子 ，我俩就接吻了 ，全程一股荔枝味 。后来她跟我说 ，人生那么长， 我没有自信能让你记住我， 但是你既然喜欢吃荔枝味的糖 我只能让你记住 我和你接吻是荔枝味的， 这样以后你吃荔枝味的东西都能想起我， 我和你接吻的味道。 如今我们分手好多年了 ，每次吃荔枝味的东西都会想起她， 家里固定有荔枝糖 ，想她了都会吃上一个 就好像在和她接吻。若还有机会 真想告诉她 人生那么长 我可能要记着你一辈子了。后来 我有过两个女友， 也终没有结果 时间就这样沉淀下去 终于有一天 我再也无法抑制我心中的那份情感 ，我决定去找她 ，我们要在一起。 后来经多方打听才知道 ，她毕业后找了份不错的工作， 工作几年后， 毅然辞职自己开了家糖果店， 并经过努力打拼 ，慢慢积累了一些财富， 而我终于有一天找到她， 开口的第一句： 还记得那次荔枝糖的味道吗？ 她强忍着泪告诉我， 荔枝糖的味道她一直没忘记 ，只是我们再也回不去 了。我没有转身离开，也没有奋不顾身的冲上去抱住她说出多年来心里一直只想对她说的那些话。就这样，我们傻傻地看着对方，彼此沉默了很久。夕阳的余晖透过窗户斜映在她的脸庞，一如当年那般楚楚动人，突然心里流过一股暖意，仿佛那些年曾一起走过的旧时光还在身旁。或许，这已经足够了。有些人，有些事，一旦错过了就是错过，不再擦肩，也不再回头。
                          虽然，岁月带走了我心中最美好的曾经，但是我并不会很伤心，因为，这都是我瞎编的！<-</p>
             
                  
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
              this.artList=articles.art10; 
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