const fs = require("fs");

// criando um fluxo de leitura
const readable = fs.createReadStream("file/big_file.txt");//esse arquivo tem mais de 2 bilhões de linhas

// criando um fluxo de escrita
const writable = fs.createWriteStream("file/saida.txt");

// pegando os pedacos lidos e passando para o writable, o pipe serve para isso
readable
    .pipe(writable)