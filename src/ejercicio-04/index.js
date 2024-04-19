// Escribe tu código aquí:
const miPromiseRechazada = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promesa rechazada')
    }, 2000)
})

miPromiseRechazada.catch((error) => {
    console.log('Error:', error)
})