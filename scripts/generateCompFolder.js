const fs = require('node:fs')
const path = require('node:path')

const args = process.argv[2]
if (!args) {
    console.error('请输入文件夹名称')
    process.exit(1)
}
const targetDir = path.resolve(process.cwd(), args)

const JSTemplate = `import './index.css'
document.body.innerHTML = \`
    <div class="main">
        content
    </div>
\`
`

const CSSTemplate = `.main {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    color: pink;
}
`

try {
    fs.mkdirSync(targetDir)
    const JSPath = path.resolve(targetDir, 'index.js')
    const CSSPath = path.resolve(targetDir, 'index.css')
    fs.writeFileSync(JSPath, JSTemplate)
    fs.writeFileSync(CSSPath, CSSTemplate)
    const GREEN = '\x1b[32m'
    const RESET = '\x1b[31m'
    console.log(`${GREEN}文件夹 ${args} 生成成功${RESET}`)
} catch (err) {
    console.log(err)
}
