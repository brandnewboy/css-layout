const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('node:path')
const exportConfig = require('./plugins/ExportResolveConfig')


module.exports = {
    plugins: [
        function ({ getWebpackConfig }) {
            /**
             * @type {import('webpack-5-chain')}
             */
            const config = getWebpackConfig()
            config
                .entry('index')
                .clear()
                .add('./index.js')
                .end();

            config
                .plugin('mini-css')
                .tap(args => {
                    return [
                        {
                            filename: 'css/[name].css',
                            chunkFilename: 'css/[name].css'
                        }
                    ]
                })
                .end();

            // 设置module scss 相关 loader配置
            config
                .module
                .rule('sass')
                .test(/\.scss$/)
                .exclude
                .add(/node_modules/)
                .end()
                .use('mini-css')
                .loader(MiniCssExtractPlugin.loader)
                .end()
                .use('css-loader')
                .loader('css-loader')
                .end()
                .use('sass-loader')
                .loader('sass-loader')
                .end();

            // 配置 resolve alias 路径解析 '@' -> src
            config
                .resolve
                .alias
                .set('@', path.resolve(__dirname, './src'))

        },
        exportConfig
    ]
}