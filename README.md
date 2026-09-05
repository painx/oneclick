# oneclick

一个纯前端的一键多搜索工具。输入一次关键词，即可同时在多个选中的搜索引擎和内容平台中打开搜索结果。

## 功能

- 支持 Bing、百度、360 搜索、知乎、搜狗、Google、DuckDuckGo、微博、Bilibili 等多个搜索入口。
- 可以自由勾选需要使用的搜索引擎。
- 支持在搜索框中按 Enter 触发搜索。
- 输入为空或未选择搜索引擎时会显示提示。
- 不需要后端服务或数据库。

## 使用方法

推荐直接打开 `一键多搜索.html`：

1. 使用浏览器打开该页面。
2. 输入搜索关键词。
3. 选择需要使用的搜索引擎。
4. 点击“一键多搜”或按 Enter。

页面会尝试同时打开多个标签页。如果只打开了一个结果或没有反应，请在浏览器中允许此页面打开弹出式窗口。

## 本地运行

项目是静态网页，可以直接双击 HTML 文件运行，也可以在当前目录启动任意静态文件服务器。例如：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/一键多搜索.html`。

## 文件说明

- `一键多搜索.html`：当前推荐使用的新版页面。
- `onesearch.html`：无样式的旧版页面。
- `onesearchwithcss.html`：带基础样式的旧版页面。
- `index.html`：项目首页。

## 仓库

- GitHub: https://github.com/painx/oneclick
- Gitee: https://gitee.com/painx/oneclick

## English

Oneclick is a static multi-search page. Enter a keyword once, select the search engines you want, and open their result pages together. No backend or database is required.

## License

This project is licensed under the GNU General Public License v3.0. See `LICENSE` for details.
