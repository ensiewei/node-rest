module.exports = (pathPrefix) => {
    pathPrefix = pathPrefix || '/api/'
    return async (ctx, next) => {
        if (ctx.request.path.startsWith(pathPrefix)) {
            ctx.rest = (data) => {
                ctx.response.type = 'application/json;charset=utf-8'
                ctx.response.body = data
            }
            await next()
        } else {
            await next()
        }
    }
}