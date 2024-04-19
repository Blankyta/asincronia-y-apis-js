// Escribe tu código aquí:
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
  .then((data) => {
    const filteredPosts = data.filter((post) =>
post.title.startsWith('A'))
    console.log(filteredPosts)
    })
})