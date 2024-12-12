const { Transform } = require("node:stream")

const transform = new Transform({
    transform(chunk, enc, callback) {

        const textoTrasformado = chunk.toString().toUpperCase()
        callback(null, textoTrasformado)
    }
})

process.stdin.pipe(transform).pipe(process.stdout)



