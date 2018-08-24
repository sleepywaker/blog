<template>
    <div class="site-info">
        <div class="icon">
            <div class="arrow" @click="updateIsInfoShow">
                <i></i>
                <i></i>
                <i></i>
            </div>
            <a href="#top"><div class="up"></div></a>  
        </div>
        <div :class="{infoIn:this.$store.state.isInfoShow,infoOut:!this.$store.state.isInfoShow}">
            <div>
                <img src="@/assets/me.jpg" alt="sleepywaker">
                <p>如果有机会见到年轻时的自己，我想告诉他“抽烟一点也不酷”</p>
                <p>ECMAScript | JavaScript | CSS3 | HTML5 | Node.js | MongoDB</p>
                <ul>
                    <li><a href="http://github.com/sleepywaker" target="_blank">github</a></li>
                    <li><a href="http://weibo.com/6348822685">weibo</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods:{
        updateIsInfoShow(){
            this.$store.commit('updateInfoShow')
        }
    }
}
</script>
<style >
.icon{
    position: fixed;
    right:20px;
    bottom:30px;
    z-index:999;
}
.up{
    width:0;
    height:0;
    border-top: 18px solid transparent;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 22px solid #A89BA6;
    position: fixed;
    right:39px;
    bottom:30px;
}
.up:hover{
    border-bottom: 30px solid #2D282C; 
}
.arrow {
    width: 24px;
    height: 20px;
    background: #A89BA6;
    padding: 12px 0 0 12px;
    position: relative;
    right:20px;
    bottom:40px;
    z-index:999;
}
.arrow i {
    display: block;
    width: 20px;
    height: 2px;
    background: #fff;
    position: absolute;
    right:8px;
    border-radius: 4px 0 0 4px;
    transition:all 600ms;
}
.arrow i:nth-of-type(1) {
    top:8px;
}
.arrow i:nth-of-type(2) {
    top:14px;
}
.arrow i:nth-of-type(3) {
    top:20px;
}
.arrow:hover i{
    border-radius: 0;
    height: 3px;
}
.arrow:hover i:nth-of-type(1){
    width: 12px;
    top:13px;
    left:9px;
    transform-origin: left center;
    transform: rotate(-30deg);
}
.arrow:hover i:nth-of-type(2){
    border-radius: 4px 0 0 4px;
}       
.arrow:hover i:nth-of-type(3){
    width: 12px;
    top:15px;
    left:9px;
    transform-origin:left center;
    transform: rotate(30deg);
}
@keyframes in
{
from {right:-320px;}
to {right:0;}
}
.infoIn{
    width:320px;
    height:100vh;
    background-color:#B3B3B3;
    position:fixed;
    right:0;
    top:0;
    animation:in 0.5s ease-out;
}
.infoOut{
    width:320px;
    height:100vh;
    background-color:#B3B3B3;
    position:fixed;
    right:-320px;
    top:0; 
}
@media screen and (max-width: 800px) {
    .site-info {
       display:none;
    }
}
</style>