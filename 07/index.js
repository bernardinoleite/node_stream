const { Duplex } = require("node:stream")

const duplex = new Duplex({
    read(size) {
        this.push("eu sou o Duplex")
        this.push(null)
    },
    write(chunk, enc, cb) {
        console.log("escrevendo no Duplex ", chunk.toString());
        cb(null)
    }
})


duplex.on("data", (data) => {
    console.log("direito do Duplex ", data.toString());
})

duplex.write("ephas, alguma coisa")
duplex.end("finalizei o Duplex")