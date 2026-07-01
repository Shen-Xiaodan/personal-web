# 个人网站

一个使用 React 和 Vite 构建的个人网站项目。

## 命令

- `npm install` 安装依赖
- `npm run dev` 启动开发服务器
- `npm run build` 构建生产版本
- `npm run preview` 预览生产构建
- `npm run deploy` 构建并发布到 `gh-pages` 分支

## GitHub Pages 发布流程

1. 在 GitHub 仓库设置里，把 Pages 的发布源改成 `gh-pages` 分支，目录选 `/root`。
2. 本地执行 `npm run deploy`，脚本会先构建项目，再把 `dist` 推到 `gh-pages` 分支。
3. 发布完成后，访问 `https://Shen-Xiaodan.github.io/personal-web/`。

如果仓库名以后改了，要同步修改 [vite.config.js](vite.config.js) 里的 `base` 路径。

## 目录

```
public/
src/
  components/
  styles/
  App.jsx
  index.css
  main.jsx
index.html
package.json
vite.config.js
```
