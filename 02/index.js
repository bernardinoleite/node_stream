const stream = require("node:stream");
const fs = require("node:fs")
const readable = new stream.Readable({
    read(size) {
        console.log(size, "\n");
        this.push("primeira linha\n")
        this.push("segunda linha\n")
        this.push(null)
    }
})

readable.on("data", (chunk) => {
    console.log("chunks recebidos", chunk.toString());
})

readable.on("end", () => {
    console.log("leitura terminada")
})










