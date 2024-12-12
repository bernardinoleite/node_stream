
console.log("digite alguma coisa e precione Enter");

process.stdin.on("data", (data) => {

    process.stdout.write(data.toString())

})
