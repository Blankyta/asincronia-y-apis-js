// Escribe tu código aquí:
function crearPromiseConRetraso(valor, retraso) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(valor)
        }, retraso)
    })
}

let num1
let num2
let num3

crearPromiseConRetraso(1, 1000)
.then((resul1) => {
    return crearPromiseConRetraso(2, 1000)
})
.then((resul2) => {
    console.log(resul2)
    num2 = resul2
    return crearPromiseConRetraso(3, 1000)
})
.then ((resul3) => { 
    console.log(resul3)
    num3 = resul3
    const suma = num1 + num2 + num3
    console.log('Suma:', suma)
})






