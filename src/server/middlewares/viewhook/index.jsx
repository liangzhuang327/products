import React from 'react'
import ReactDOMServer from 'react-dom/server'
// import beautify from 'js-beautify'

import html from './html'
// import Isomorph from '../../../common/helpers/Isomorph'
// import routes from '../../../common/redux/routes'
// import billingRoutes from '../../../common/redux/billingRoutes'

export default function viewhook(_options = { beautify: true, internals: true }) {
  const options = Object.assign({}, _options)

  return async function (ctx, next) {
    if (ctx.path.startsWith('/billing') || ctx.path === '/login/touch')
      ctx.entryPoint = 'billing';
    // ctx.store = Isomorph.createStore(ctx.entryPoint)
    // ctx.history = Isomorph.createHistory(ctx.store, ctx.path)
    ctx.render = function (pageInfo, internals = options.internals || true) {
      const render = internals
        ? ReactDOMServer.renderToString
        : ReactDOMServer.renderToStaticMarkup

    //   let markup = render(<Isomorph store={ctx.store} history={ctx.history}
    //     routes={!!ctx.entryPoint && billingRoutes || routes} />)

    //   if (options.beautify) {
    //     markup = beautify.html(markup)
    //   }
    let markup = render(<div><h1>hellow:{ctx.path}</h1><div>{pageInfo.content}</div></div>)
      ctx.type = 'html';
      // 判断页面是否为billing, 传入html加载不同的依赖
      ctx.body = html(Object.assign({ entryPoint: ctx.entryPoint || 'index' }, pageInfo), markup, null)
    }

    await next()
  }
}
