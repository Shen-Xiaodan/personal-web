# 项目框架建设指南

## ✨ 项目完成情况

你的粉色主题个人网站框架已成功搭建！以下是已完成的所有内容。

## 📂 新增文件结构

```
src/
├── components/
│   ├── Navigation.jsx      # 导航栏组件（带平滑滚动）
│   ├── Hero.jsx            # 英雄主页（宇宙/音乐主题背景）
│   ├── About.jsx           # 关于我（自我介绍 + 可展开详情）
│   ├── Education.jsx       # 教育经历（时间线交互）
│   ├── Experience.jsx      # 工作经历（卡片网格）
│   └── Gallery.jsx         # 我的足迹（图片展廊）
│
├── styles/
│   ├── globals.css         # 全局样式 + 粉色主题变量
│   ├── Navigation.css      # 导航栏样式
│   ├── Hero.css            # 英雄主页样式（含动画）
│   ├── About.css           # 关于我样式
│   ├── Education.css       # 教育经历样式
│   ├── Experience.css      # 工作经历样式
│   └── Gallery.css         # 画廊样式
│
├── App.jsx                 # 主应用（已更新）
├── App.css                 # 应用样式（已精简）
└── index.css               # 全局CSS（已更新）
```

## 🎨 设计特色

### 粉色主题颜色
- **主粉色**: `#ff69b4`
- **紫色**: `#b24bff`
- **副粉色**: `#ff85d0`
- **金色强调**: `#ffd700`
- **深蓝背景**: `#1a1a2e`

### 交互效果
✅ **导航栏**
- 固定导航，滚动时背景变暗
- 平滑滚动到各个板块
- 移动端汉堡菜单

✅ **英雄主页**
- 动画星星效果
- 浮动行星（视差滚动）
- 音符漂浮动画

✅ **关于我**
- 图片悬停放大和旋转
- 可展开详细信息
- 技能标签悬停效果

✅ **教育经历**
- 时间线布局
- 卡片展开/收起动画
- 标记圆点发光效果

✅ **工作经历**
- 响应式卡片网格
- 悬停时抬起效果
- 展开显示成就列表

✅ **我的足迹**
- 图片网格布局
- 悬停显示图片信息
- 选中状态保持显示
- 下方统计数据

## 🚀 快速开始

### 1. 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:5173` 查看你的网站

### 2. 自定义内容

#### 修改关于我
编辑 `src/components/About.jsx`:
```jsx
<p className="intro-text">
  Hi there! 👋 修改这里的自我介绍
</p>
```

#### 添加教育经历
编辑 `src/components/Education.jsx` 中的 `educationData` 数组：
```jsx
const educationData = [
  {
    id: 1,
    school: '你的学校名称',
    degree: '你的学位信息',
    period: '时间段',
    description: '描述',
    highlights: ['技能1', '技能2'],
  },
  // 添加更多...
];
```

#### 添加工作经历
编辑 `src/components/Experience.jsx` 中的 `experienceData` 数组，格式类似

#### 添加旅行照片
编辑 `src/components/Gallery.jsx` 中的 `photoData` 数组：
```jsx
const photoData = [
  {
    id: 1,
    title: '地点名称',
    location: '城市',
    emoji: '📸',  // 或使用真实图片 URL
    description: '照片描述',
  },
  // 添加更多...
];
```

### 3. 替换占位符

目前使用 emoji 作为图片占位符。要使用真实照片：

**在 Gallery.jsx 中：**
```jsx
// 替换这部分
<div className="photo-placeholder">
  <div className="emoji-large">{photo.emoji}</div>
</div>

// 为这样
<img src={photo.imageUrl} alt={photo.title} className="photo-image" />
```

**在 About.jsx 中：**
```jsx
// 替换为你的照片
<img src="/path/to/your-photo.jpg" alt="我的照片" />
```

## 🎯 常见定制

### 修改导航栏颜色
编辑 `src/styles/globals.css` 中的 CSS 变量：
```css
:root {
  --primary-pink: #your-color;
  /* 其他变量... */
}
```

### 修改卡片发光效果
编辑各组件对应的 CSS 文件，调整 `box-shadow` 属性

### 添加新的部分
1. 创建新组件文件 `src/components/YourComponent.jsx`
2. 创建对应的样式文件 `src/styles/YourComponent.css`
3. 在 `src/App.jsx` 中导入并使用

## 📱 响应式设计

所有组件都已针对移动设备进行优化：
- 平板设备 (768px 以下)：单列布局
- 手机设备：移动菜单、调整字体大小

## 🔧 生产构建

```bash
npm run build
```

生成的文件将在 `dist` 文件夹中，可直接部署到任何静态托管平台。

## 📦 项目依赖

- React 18
- Vite
- CSS3 (包含动画和渐变)

无需额外依赖！一切都是原生 React + CSS 实现。

## 💡 接下来的步骤

1. **添加真实内容** - 替换示例数据为你的实际信息
2. **上传真实照片** - 将 emoji 替换为 Gallery 中的真实照片
3. **添加联系方式** - 可在 Hero 或新的 Footer 组件中添加
4. **SEO 优化** - 添加 meta 标签和 Open Graph 标签
5. **部署** - 部署到 Vercel, Netlify 或其他平台

## 🎨 色彩参考

### 粉色系
```
#ff69b4 - 主粉色（按钮、链接）
#ff85d0 - 副粉色（文字强调）
#ffc0e0 - 浅粉色（背景）
```

### 紫色系
```
#b24bff - 紫色强调
#2d1b4e - 深紫色背景
#1a1a2e - 深蓝背景
```

### 其他
```
#ffd700 - 金色（特殊强调）
#f0f0f0 - 文字颜色
#b0b0c0 - 次级文字
```

## 🎵 动画和效果

项目中包含以下动画：
- `bounce` - 上下反弹
- `twinkle` - 闪烁（星星）
- `float` - 浮动（行星、音符）
- `shimmer` - 闪耀（图片）
- `glow` - 发光
- `fadeInDown/Up` - 淡入（从上/下）
- `slideInFromLeft/Right` - 滑入（从左/右）

所有动画都在 CSS 中定义，可在 `styles/globals.css` 中调整时间和效果。

## ❓ 常见问题

**Q: 如何改变粉色主题的颜色？**
A: 编辑 `src/styles/globals.css` 中的 CSS 变量即可全局更改。

**Q: 可以添加更多板块吗？**
A: 完全可以！创建新组件，按照现有组件的模式编写。

**Q: 如何添加页脚？**
A: 创建 `Footer.jsx` 组件，在 `App.jsx` 中的 `Gallery` 后面引入。

**Q: 如何改变字体？**
A: 在 `index.css` 或 `globals.css` 中修改 `font-family` 属性。

---

祝你建设网站愉快！如有问题，随时咨询。🚀✨
