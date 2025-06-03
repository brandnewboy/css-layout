const fs = require('node:fs')
const path = require('node:path')
const CSSExt = 'css'
const SCSSExt = 'scss'
const args = [process.argv[2], process.argv[3]]
if (!args[1]) {
    args[1] = SCSSExt
}
const isCSSExt = args[1] === CSSExt
const isSCSSExt = args[1] === SCSSExt

if (!args) {
    console.error('请输入文件夹名称')
    process.exit(1)
}
const targetDir = path.resolve(process.cwd(), args[0])

const JSTemplate = `import './index.${args[1]}'
document.body.innerHTML = \`
    <div class="main">
        content
    </div>
\`
/* ====================================================================================== */
`

const CSSTemplate = `.main {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    color: pink;
}
`

const SCSSTemplate = `@use 'sass:map';
@use 'sass:list';

@mixin is-circle($yOrn: false) {
  @if ($yOrn) {
    border-radius: 50%;
  }
}

$default-dot-color: rgba(0, 0, 0, 0.12);
$selected-dot-color: rgba(255, 255, 255, 0.63);

$dots-color-map: (
  default: $default-dot-color,
  selected: $selected-dot-color
);

$dots: [];

@for $i from 1 through 5 {
  $dots: list.append($dots, "default");
}

$dots: list.append($dots, "selected");



@each $key in $dots {
    $index: list.index($dots, $key);
    .main__sub-box:nth-child(#{$index}) {
        background-color: map.get($dots-color-map, $key);
    }
}
`

try {
    fs.mkdirSync(targetDir)
    const JSPath = path.resolve(targetDir, 'index.js')
    const StyleSheetPath = path.resolve(targetDir, `index.${args[1]}`)
    fs.writeFileSync(JSPath, JSTemplate)
    if (isCSSExt) {
        fs.writeFileSync(StyleSheetPath, CSSTemplate)
    } else if (isSCSSExt) {
        fs.writeFileSync(StyleSheetPath, SCSSTemplate)
    }

    const GREEN = '\x1b[32m'
    const RESET = '\x1b[31m'
    console.log(`${GREEN}文件夹 ${args[0]} 生成成功${RESET}`)
    console.log(`${GREEN}样式表使用语言： ${args[1]} 生成成功${RESET}`)
} catch (err) {
    console.log(err)
}
