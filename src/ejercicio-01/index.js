function imprimirHolaMundoAsyncrono(callback){
    setTimeout(() => {
        callback('Hola Mundo')
    },2000)
}

imprimirHolaMundoAsyncrono((mensaje) => {
    console.log(mensaje)
})
