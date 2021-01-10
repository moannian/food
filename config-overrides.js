const { View } = require('antd-mobile');
const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require("path")
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    // 配置别名

    addWebpackAlias({
        "@": path.resolve(__dirname, './src'),
        View: path.resolve(__dirname, './src/view')
    }),

    // 装饰器
    // 首先需要下载一个安装包 
    // [npm i @babel/plugin-proposal-decorators --save]
    addDecoratorsLegacy()

    // 所有的配置必须在这个括号里面
);