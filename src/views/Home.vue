<template>
  <div class="home">
    <div class="home-content"> 
      <p>使用vscode，新建vue模板
          2017年07月26日 10:28:40
          阅读数：16467
          第一步: 新建模板并保存
          文件 --> 首选项 --> 用户代码片段 --> 输入vue，选择vue.json -->复制 第三步中的模板内容中内容保存
          第二步: 添加配置，让vscode允许自定义的代码片段提示出来
          文件 --> 首选项 --> 设置 ---> 添加这2项
          <code>
          // Specifies the location of snippets in the suggestion widget
          "editor.snippetSuggestions": "top",
          // Controls whether format on paste is on or off
          "editor.formatOnPaste": true
        </code>
          第三步: 复制以下代码，保存重启vscode
          
          第四步:测试是否添加成功
          测试方法： 新建vue后缀文件，输入vue，按下tab键，OK
          缺点是：无法像sublime一样新建一个vue文件就可以自动带上对应的模板。
          吐槽一下：webstorm中，中文输入法兼容有问题，据传是Microsoft .NET Framework 4.5.2以上版本的兼容问题，更换多次版本后无法修复。无奈只能换到vscode
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>
<style scoped>
.home-content{
      width:100%;
      height:500px;
      background-color:blue;
  }
</style>
