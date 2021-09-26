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
        },
        proxy: {
            "/api": {
              target: "http://175.27.189.130:5000", // 要访问的接口域名
              // ws: true, // 是否启用websockets
              changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
              pathRewrite: {
                '^/api': '' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
              }
            }
        }
    }
}
