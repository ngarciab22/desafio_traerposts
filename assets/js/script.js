//Función que obtiene los posts
const getPosts = async () => { //Función asincrona que conecta con la API
    const urlApi = 'https://jsonplaceholder.typicode.com/posts' //URL de la API
    try { //try catch para manejar los errores
        const response = await fetch(urlApi) //Respuesta de la API
        const posts = await response.json() //Datos obtenidos de la API
        mostrarPosts(posts) //Llamada a la función que muestra los posts

    } catch (error) {
        console.log(error)
    }
}
//Función que muestra los posts
const mostrarPosts = (posts) => {
    const divLista = document.getElementById('post-data') //Div donde se muestra la lista
    let lista = '<ul>'; //Variable donde se almacena la lista
    posts.forEach(post => { //Ciclo para recorrer los posts
        lista += `<li><strong>${post.title}</strong> <br> ${post.body}</li> <br>`; //Se crean los items de la lista 
    });
    lista += '</ul>'; //Se cierra la lista
    divLista.innerHTML = lista; //Se muestra la lista en el div
}

