# Personal Website - React + Vite

## Project Overview
这是一个使用 React 和 Vite 构建的个人网站项目。

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: JavaScript/JSX
- **Styling**: CSS

## Project Structure
```
src/
├── components/     # React 组件
├── App.jsx         # 主应用组件
├── App.css         # 应用样式
├── index.css       # 全局样式
└── main.jsx        # 应用入口
public/            # 静态资源
```

## Available Scripts

### Development Server
```bash
npm run dev
```
启动开发服务器，访问 http://localhost:5173

### Build for Production
```bash
npm run build
```
构建生产版本到 `dist` 文件夹

### Preview Production Build
```bash
npm run preview
```
本地预览生产构建

## Getting Started

1. **开发环境启动**
   ```bash
   npm run dev
   ```

2. **编辑代码**
   - 修改 `src/App.jsx` 和 `src/components` 中的组件
   - 保存时会自动刷新浏览器

3. **构建部署**
   ```bash
   npm run build
   ```

## Dependencies
- react@latest - UI 库
- react-dom@latest - React DOM 渲染
- vite@latest - 构建工具

## ESLint Configuration (Optional)
项目使用 eslint-plugin-react-hooks 进行代码质量检查。

## Notes
- Vite 提供快速的开发体验和优化的生产构建
- React 的热模块更新（HMR）在保存时自动刷新
- 所有静态资源放在 `public` 文件夹中
