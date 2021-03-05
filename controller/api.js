module.exports = {
    'GET /api/test': (ctx, next) => {
        ctx.rest({'hello': 'world'})
    },
    'GET /api/:id': (ctx, next) => {
        if (Math.random() > 0.5) {
            ctx.rest({'id': ctx.params.id})
        } else {
            var error = module.require('..\\error')
            throw new error('400', '运气不够好')
        }
        
    }
}