module.exports = () => {
    return async (ctx, next) => {
        try {
            await next()
        } catch (e) {
            console.log(e)
            ctx.response.status = 400
            ctx.response.type = 'application/json;charset=utf-8'
            ctx.response.body = {
                code: e.code || 'internal: unknow_error',
                message: e.message || 'Please contact the system administrator'
            }
        }
    }
}