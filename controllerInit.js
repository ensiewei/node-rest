var fs = module.require('fs')

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4)
            router.get(path, mapping[url])
            console.log(`register URL mapping: GET ${path}`)
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5)
            router.post(path, mapping[url])
            console.log(`register URL mapping: POST ${path}`)
        } else {
            console.log(`invalid URL: ${url}`)
        }
    }
}

function addController(router, dir) {
    var files = fs.readdirSync(__dirname + dir)
    var js_files = files.filter((f) => {
        return f.endsWith('.js')
    })

    for (var f of js_files) {
        console.log(`process controller: ${f}...`)
        let mapping = module.require(__dirname + dir + '\\' + f)
        addMapping(router, mapping)
    }
}

module.exports = (dir) => {
    let
        controller_dir = dir || '\\controller',
        router = module.require('koa-router')()
    addController(router, controller_dir)
    return router.routes()
}