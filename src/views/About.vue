<template>
  <div style="width: 80%;margin-left: 10%;background-color: #ffffff;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
    <div style="padding: 75px 75px">
      <div class="content markdown-body" v-html="about"></div>
    </div>
  </div>
</template>
<script>
import 'github-markdown-css/github-markdown.css' // 然后添加样式markdown-body
export default {
  data(){
    return{
      about:'',
    }
  },
  created() {
    this.about = this.getMarkdown('\n' +
        '\n' +
        '# 关于OJ\n' +
        '\n' +
        '**本系统为毕设作品，用于教师部署教学任务，以及ACM协会比赛**\n' +
        '\n' +
        '\n' +
        '\n' +
        '## 代码编写格式\n' +
        '\n' +
        '代码的输入输出均为标准输入与输出，需要注意**EOF**\n' +
        '\n' +
        '例如：\n' +
        '\n' +
        '```c++\n' +
        '#include <iostream>\n' +
        'using namespace std;\n' +
        '\n' +
        'int main(){\n' +
        '    int a, b;\n' +
        '    cin >> a >> b;\n' +
        '    cout << a + b << endl;\n' +
        '    return 0;\n' +
        '}\n' +
        '```\n' +
        '\n');
  },
  methods:{
    getMarkdown(str){
      var MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();
      return md.render(str);
    },
  }
}
</script>
