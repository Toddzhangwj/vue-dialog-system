const path = require('path')
module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    // If you are using less-loader@5 please spread the lessOptions to options directly
                    modifyVars: {
                        'primary-color': '#E64463', // 主题颜色
                        'link-color': '#E64463', // 连接颜色
                        'border-radius-base': '2px' // 直角边框
                    },
                    javascriptEnabled: true
                }
            }
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname,'./src/styles/global.less')]
        }
    },
    devServer: {
        overlay: {
            warnings: true,
            error: true
        }
    }
}
