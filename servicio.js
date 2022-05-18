// PASOS PARA COSUMIR UN API CON JS PURO

// 1. DECLARO LA URI
const URI="https://api.spotify.com/v1/artists/65ytbAiKhTtwQE6Jcqw6mg/top-tracks?market=US"

// 2. DECLARO LOS PARAMETROS DE LA PETICION

const TOKEN="Bearer BQDfA14kX9KYzTnfV1Uh98B1mWhBi6ceP6RixateLQiL5xE-hlSP-YoZOPCknJltnn29j76dLr3ZPbxKwfzQDZJX8M7QrKkOVk-RDBHWPPObFs3y-C1vvvh7odxdymWd91Tm5Q2omCMdYJbBt4iO6JMX0dZenrU"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}



// rutina para consumir api con metodo post
// 1. URI para done voy
const URIPOST='https://accounts.spotify.com/api/token'

// 2. almaceno los datos que voy a enviar
let dato1='client_id=21338d43856644b7a4865bf46eed6d02'
let dato2='client_secret=e93447c4a3864354a8f2f829677b6cca'
let dato3='grant_type=client_credentials'

// 3. configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

// 4. voy al servidor a consumir el servicio
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})













// // 3. DECLARO EL FETCH (A DONDE VOY)
// fetch(URI,PETICION)
// .then(function(respuesta){
//     return(respuesta.json())
// })
// .then(function(respuesta){
//     console.log(respuesta) // respuesta es un objeto
//     console.log(respuesta.tracks) // arreglos de 10 canciones
//     pintarCanciones(respuesta.tracks)
// })
// .catch(function(respuesta){
//     console.log(respuesta)
// })

// // funcion para recorrer un arreglo
// function pintarCanciones(canciones){
//     let fila=document.getElementById("fila")
//     canciones.forEach(function(cancion){
//         // console.log(cancion)
//         console.log(cancion.name)
//         console.log(cancion.preview_url)
//         console.log(cancion.album.images[0].url)

//         // rutina para llenado
//         let columna=document.createElement("div")
//         columna.classList.add("col")

//         let tarjeta=document.createElement("div")
//         tarjeta.classList.add("card","h-100","shadow")

//         let audio=document.createElement("audio")
//         audio.classList.add("w-100")
//         audio.setAttribute("controls","controls")
//         audio.src=cancion.preview_url

//         let foto=document.createElement("img")
//         foto.classList.add("w-100","img-fluid")
//         foto.src=cancion.album.images[0].url

//         // PADRES E HIJOS
//         tarjeta.appendChild(foto)
//         tarjeta.appendChild(audio)
//         columna.appendChild(tarjeta)
//         fila.appendChild(columna)
//     })

// }
