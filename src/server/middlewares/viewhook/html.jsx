// import invariant from 'invariant'
// import env from '../../env'

// const isDev = process.env.NODE_ENV === 'development';
// const baseUrl = env.HTTP_SCRIPT_BASEURL
// const suffix = env.HTTP_SCRIPT_SUFFIX
// const random = isDev ? '' : `?_=${env.STATIC_RANDOM_SUFFIX}`;

export default function html(pageInfo, content, state) {
  // 开发环境使用样式热更新, 不再用打包后的独立css文件
//   const loadCss = isDev ? '' : `<link href="${baseUrl}/styles/default/${pageInfo.entryPoint}${suffix}.css${random}" rel="stylesheet" type="text/css" />`
//   const yyyScript = isDev ? '' : `<script src="${baseUrl}/scripts/yonyou-yyy.js${random}"></script>`

//   invariant(
//     typeof pageInfo === 'object',
//     `ctx.render函数的参数格式为：${JSON.stringify({
//       title: 'html>head>title的值',
//       keyword: 'html>head>keyword的值',
//       description: 'html>head>description的值',
//       baseUrl: '静态资源的根路径，如：http://localhost:3004/static/',
//       content: 'ReactDOMServer.renderToString|renderToStaticMarkup输出的字符串',
//       state: 'ctx.store.getState()',
//     })}，可传入空对象。`
//   )

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>${pageInfo.title}</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  </head>
  <body>
    <div id="container">${content}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(state)}
    </script>
  </body>
</html>`
}
