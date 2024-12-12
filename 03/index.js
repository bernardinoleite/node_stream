const { Writable } = require("stream")

const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log("simulado que estou gravando", chunk.toString());
        callback(null);
    }

})

writable.write("Primeira linha\n")
writable.write("Segunda linha\n")
writable.end("ultima linha\n") 