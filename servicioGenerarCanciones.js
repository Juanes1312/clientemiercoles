import {generarToken} from './servicioGenerarToken.js'

// llamar a la funcion generarToken
let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`

// uri del servicio
const URI="https://api.spotify.com/v1/artists/65ytbAiKhTtwQE6Jcqw6mg/top-tracks?market=US"

// configuro la peticion
const PETICION={
    method:"GET",
    headers:{Authorization:token}
}


// consumo el servicio
export async function obtenerCanciones(){
    let respuesta=await fetch(URI,PETICION)
    return respuesta.json()
}
