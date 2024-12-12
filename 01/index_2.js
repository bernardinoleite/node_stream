const fs = require("node:fs")
const readable = fs.createReadStream("file/big_file.txt")

readable.on("data", (chunk) => {
    console.log("Chunk Recebido", chunk.toString(), "\n\n");

})

readable.on("end", () => {
    console.log("Leitura terminada");
})