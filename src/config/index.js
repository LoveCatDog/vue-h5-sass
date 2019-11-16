module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: { //axios跨域处理
            '/api': { //此处并非和url一致
                target: 'https://gkcx.eol.cn',
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}