# CSS 布局案例练习集

![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

本项目是一个常见 CSS 布局案例的集合，重点展示了 Flexbox 和 Grid 布局的强大功能。通过实际的代码示例，帮助开发者更好地理解和掌握这些布局技术。

## 🌟 特性
- **丰富的案例**：包含多种常见布局场景，如居中布局、多列布局、粘性页脚等。
- **代码示例**：每个案例都提供了 HTML、CSS（含 Sass）和 JavaScript 代码，方便学习和参考。


## 🚀 快速开始

### 安装依赖
```bash
pnpm install
```
### 运行项目
```bash
pnpm start
```
### 查看指定案例
```javascript
// 在 src 目录下找到对应的案例目录，在入口文件引入其index.js文件即可

// 如知乎导航模仿案例： src/flex-box/zhihu-head-nav/index.js
// 在src/flex-box/index.js
import './zhihu-head-nav/index'


// 同时在根目录index.js
import './flex-box/index'
````


## 📚 主要布局技术
### Flexbox 布局
Flexbox 是一种一维布局模型，用于在一个方向（行或列）上排列元素。它提供了强大的对齐和空间分配功能。

#### 常见案例
- 居中布局：将元素水平和垂直居中。
- 等高列布局：使多列元素高度一致。
- 粘性页脚：确保页脚始终位于页面底部。
```scss
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main__sub-box {
  width: 100px;
  height: 100px;
  background-color: #ea3465;
}
```
### Flexbox 简易指南
#### 基本概念
- Flex 容器：设置了 `display: flex` 或 `display: inline-flex` 的元素，是所有 Flex 项目的父元素。
- Flex 项目：Flex 容器内的直接子元素。
主轴和交叉轴：Flex 容器有主轴和交叉轴，`flex-direction` 属性决定主轴方向，默认是水平方向。

#### 常用属性
- 容器属性
  - `flex-direction`：指定主轴方向，可选值有 row（默认）、row-reverse、column、column-reverse。
  - `flex-wrap`：控制 Flex 项目是否换行，可选值有 nowrap（默认）、wrap、wrap-reverse。
  - `justify-content`：定义 Flex 项目在主轴上的对齐方式，如 flex-start、flex-end、center、space-between 等。
  - `align-items`：定义 Flex 项目在交叉轴上的对齐方式，如 stretch（默认）、flex-start、flex-end、center 等。
  - `align-content`：定义多根轴线的对齐方式，若只有一根轴线则无效。

- 项目属性
  - `flex-grow`：定义项目的放大比例，默认为 0。
  - `flex-shrink`：定义项目的缩小比例，默认为 1。
  - `flex-basis`：定义在分配多余空间之前，项目占据的主轴空间，默认为 auto。
  - `align-self`：允许单个项目有与其他项目不同的对齐方式，覆盖 align-items 属性。

### Grid 布局
Grid 布局是一种二维布局模型，允许开发者将页面划分为行和列，然后将元素放置在这些网格中。它提供了更灵活的布局控制。

#### 常见案例
- 隐式网格：处理超出预设网格的元素排列。
- 基于线的布局：通过网格线精确控制元素位置。
- 网格区域布局：使用 grid-template-areas 定义复杂布局。
#### 常见应用场景
- 多列网格布局：快速创建相册、产品列表等多列布局。
- 复杂页面结构：构建包含页眉、页脚、侧边栏和主内容区的复杂页面。
- 响应式布局：通过媒体查询轻松实现不同屏幕尺寸下的布局变化。
```scss
.main {
  display: inline-grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px;
  grid-auto-flow: row;
  grid-auto-rows: 100px;
}

div {
  background-color: pink;
  box-sizing: border-box;
  border: 1px solid black;
}
```

### Grid 简易指南
#### 基本概念
- 网格容器：设置了 `display: grid` 或 `display: inline-grid` 的元素，是所有网格项目的父元素。
- 网格项目：网格容器内的直接子元素。
- 网格线：划分网格的线，包括行网格线和列网格线。
- 网格轨道：两条相邻网格线之间的空间，分为行轨道和列轨道。
- 网格单元格：行轨道和列轨道交叉形成的小格子。
- 网格区域：由多个网格单元格组成的矩形区域。
#### 常用属性
  - 容器属性 
    - `grid-template-columns` 和 `grid-template-rows`：定义网格的列和行，可使用长度值、百分比、fr 单位等。
    - `grid-template-areas`：使用区域名称定义网格布局。
    - `gap`：设置网格轨道之间的间距，包括 `row-gap` 和 `column-gap`。
    - `justify-items`：定义网格项目在列轴上的对齐方式，如 start、end、center、stretch。
    - `align-items`：定义网格项目在行轴上的对齐方式，如 start、end、center、stretch。

- 项目属性
  - `grid-column-start` 和 `grid-column-end`：指定项目的列起始和结束网格线。
  - `grid-row-start` 和 `grid-row-end`：指定项目的行起始和结束网格线。
  - `grid-area`：指定项目所在的网格区域，可使用区域名称或网格线编号。

## 📁 项目结构

```
css/
├── .gitignore
├── c-build.config.js
├── index.js
├── package.json
├── plugins/
│   └── ExportResolveConfig.js
├── public/
│   ├── index.html
│   └── test.html
├── scripts/
│   └── generateCompFolder.js
├── src/
│   ├── css-box/
│   ├── flex-box/
│   ├── grid-box/
│   ├── helper/
│   ├── static/
│   ├── styles/
│   ├── test1/
│   └── three-col/
└── ws.resolve.config.js
```


## 脚手架
## 🚀 c - build 脚手架 🚀
<div>
  <img width="100" height="100" src="https://img.icons8.com/nolan/64/restart.png" alt="restart"/>
  <img width="100" height="100" src="https://img.icons8.com/keek/100/engineering.png" alt="engineering"/>
  <img width="100" height="100" src="https://img.icons8.com/color/48/chain.png" alt="chain"/>
</div>
<a style="text-align: center" target="_blank" href="https://icons8.com/icon/OlaQxHnnC7U4/engineering">Engineering</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

### 简介
对webpack的二次封装，主要是特性是监听配置文件修改，自动重启服务。

### 主要功能
- <img width="20" height="20" src="https://img.icons8.com/nolan/64/restart.png" alt="restart"/>**服务重启**：修改配置文件自动重启服务。
- <img width="20" height="20" src="https://img.icons8.com/color/48/chain.png" alt="chain"/>**插件扩展**：配置通过插件修改，使用`webpack-5-chain`。

### case -> ExportResolveConfig.js
插件是一个函数，接受一个ctx作为参数，ctx包含以下属性：
- `getWebpackConfig`: 获取webpack-5-chain配置对象
- `emitHooks`: 触发某个指定hook
- `setValue`: 向全局(脚手架内)设置共享值
- `getValue`: 获取全局(脚手架内)共享值
```javascript
module.exports = function (ctx) {
    const targetPath = path.resolve(process.cwd(), 'ws.resolve.config.js')
    let oldConfig = null
    if (fs.existsSync(targetPath)) {
        oldConfig = require(targetPath)
    }
    const { getWebpackConfig } = ctx
    const webpackConfig = getWebpackConfig()
    const code = webpackConfig.toConfig().resolve
    // TODO 判断配置是否有不同，如有不同再使用新配置覆盖旧配置 这里先简单判断alias是否有不同
    if (oldConfig && oldConfig.alias && code.alias) {
        const oldAlias = oldConfig.alias
        const newAlias = code.alias
        if (newAlias === oldAlias) {
            return
        }
    }
    const res = `
/**
* 帮助webstorm或者其他编辑器识别webpack的模块解析规则
* 注意：该文件由插件自动生成，如非必要请勿手动修改
* 插件名称：ExportResolveConfig
* 插件路径：${path.resolve(__dirname, './ExportResolveConfig.js')}
*/
module.exports = {
    resolve: ${JSON.stringify(code)}
}
`
    writeFile(
        path.resolve(process.cwd(), 'ws.resolve.config.js'),
        res
    ).then(() => {
        console.log(GREEN+'辅助webstorm的webpack配置文件导出成功!!!'+RESET)
    }).catch(err => {
        console.error('辅助webstorm的webpack配置文件导出成功失败 ', err)
    })
}
```

#### usage of the plugin
```javascript
// c-build.config.js
const ExportResolveConfig = require('./plugins/ExportResolveConfig')
module.exports = {
    plugins: [
        ExportResolveConfig
    ]
}
```


