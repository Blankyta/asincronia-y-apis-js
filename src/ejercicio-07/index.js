// Escribe tu código aquí:
axios
.getAdapter('https://jsonplaceholder.typicode.com/post/1')
.then((response) => {
    console.log(response.data)
})
.catch((error) => {
    console.error(error)
})