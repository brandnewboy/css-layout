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
                    .end()

        }
    ]
}