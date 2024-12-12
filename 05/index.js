process.stdin.on("data", (data) => {
    console.log("Voce digitou: ", data.toString());

    if (data.toString().trim() === "sair") {
        console.log("saindo...")
        setTimeout(() => {
            process.stdin.pause()
        }, 2000)
    }

})