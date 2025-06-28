const fs = require('node:fs')
const path = require('node:path')

/**
 * 写入文件
 * @param {string} filePath 文件路径
 * @param {string} data 文件内容
 * @returns {Promise<void>}
 */
function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const GREEN = '\x1b[32m'
const RESET = '\x1b[0m'
module.exports = function (ctx) {
    const targetPath = path.resolve(process.cwd(), 'ws.resolve.config.js')
    let oldConfig = null
    if (fs.existsSync(targetPath)) {
        oldConfig = require(targetPath)
    }
    const { getWebpackConfig } = ctx
    const webpackConfig = getWebpackConfig()
    const resolveCode = webpackConfig.toConfig().resolve
    // TODO 判断配置是否有不同，如有不同再使用新配置覆盖旧配置 这里先简单判断alias是否有不同
    if (oldConfig && oldConfig.alias && code.alias) {
        const oldAlias = oldConfig.alias
        const newAlias = resolveCode.alias
        if (newAlias === oldAlias) {
            return
        }
    }
    const res = String.raw`
/**
* 帮助webstorm或者其他编辑器识别webpack的模块解析规则
* 注意：该文件由插件自动生成，如非必要请勿手动修改
* 插件名称：ExportResolveConfig
* 插件路径：${path.resolve(__dirname, './ExportResolveConfig.js')}
*/
module.exports = {
    resolve: ${JSON.stringify(resolveCode)}
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