// PASOS PARA COSUMIR UN API CON JS PURO

// 1. DECLARO LA URI
const URI="https://api.spotify.com/v1/artists/65ytbAiKhTtwQE6Jcqw6mg/top-tracks?market=US"

// 2. DECLARO LOS PARAMETROS DE LA PETICION

const TOKEN="Bearer BQCt-tUv2TQa9GKoY-syQj8Salhrtl0K07lXAgzdPCtnE4fvzuzegrOdHT9acOElBCojAtLoW-g3rGu9V6w9CjKDj3SEdjmF6fNM3ClggJuBQtEq1CHo83viMSi7GIwChLi2B4uLexF4j0h52_BHYtfpkkepixk"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

// 3. DECLARO EL FETCH (A DONDE VO)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) // respuesta es un objeto
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)

})
.catch(function(respuesta){
    console.log(respuesta)
})