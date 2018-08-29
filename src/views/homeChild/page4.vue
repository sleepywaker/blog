<template>
  <div class="main">
    <div class="art-container">
        <div class="title">{{art10.title}}</div>
        <p class="fontE">{{art10.date}}</p>  
        <p class="mainArt">&nbsp&nbsp&nbsp&nbsp那天夕阳下的奔跑，那是我逝去的青春</p>
        <p class="mainArt">&nbsp&nbsp&nbsp&nbsp昨天晚上在网吧门前蹭网，看到一对年轻情侣吵架，突然那个女的指着我说：“你要有他一半帅，我们会吵架？”
          我刚想说话，突然那个男的又指着我说：“我要有他一半帅，我会看上你？”这TM的，我这蹭个网关我屁事orz</p>
        <router-link to="art10" class="read-whole">阅读全文>></router-link>                                        
      </div>
    </div>
</div>
</template>

<script>
import '@/assets/css/articles.css'
import articles from '@/assets/articles.json'
export default {
  data(){
    return {
      art10:'',
    }
  },
  methods:{
      getArt(){
        this.art10=articles.art10;
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
.mainArt{
    margin-top:20px;
    padding-bottom:20px;
  }
.title{
    text-align: center;
    height:40px;
    line-height:40px;
    margin:0 auto;
    font-size: 1.5rem;
    padding-top:20px;
    padding-bottom:20px;
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
