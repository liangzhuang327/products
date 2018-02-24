# products
programs
# bable-preset-env
在这里用bable-preset-env来代替balel-preset-es2015或者es2016、es2017，env会自动匹配最新版本的JavaScript所有插件
#viewhook
viehook中间件是为了实现同构服务端渲染，目前只简单的模拟了一下
1、定义中间件为一个函数，此函数返回一个异步函数，在这个函数里边实现该中间件的任务，将主动权移交下一个中间件
2、首先在中间件里定义一个render的方法挂载到ctx对象里边，用来渲染页面，供后续路由使用
#在项目中使用node koa2
在项目中使用koa2可以用生成器来生成；
全局安装生成器：npm install koa-generator -g；
生成项目：koa2 文件名

