const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');

module.exports = (url, dir) => {
    url = url || '/static/'
    dir = dir || path.join(__dirname, 'static')
    return async (ctx, next) => {
        let rpath = ctx.request.path
        if (rpath.startsWith(url)) {
            let fp = path.join(dir, rpath.substring(url.length))
            if (await fs.existsSync(fp)) {
                ctx.response.type = mime.lookup(fp)
                ctx.response.body = await fs.readFile(fp)
            } else {
                ctx.response.status = 404
            }
        } else {
            await next()
        }
    }
}