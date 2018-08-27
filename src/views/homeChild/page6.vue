<template>
    <div class="main">
      <div class="art-container">
        未知区域
      </div>
  </div>
  </template>
  
  <script>
  import '@/assets/css/articles.css'
  export default {
    data(){
      return {

      }
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