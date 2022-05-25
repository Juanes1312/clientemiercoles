const URI='https://accounts.spotify.com/api/token'

// 2. almaceno los datos que voy a enviar
let dato1='client_id=21338d43856644b7a4865bf46eed6d02'
let dato2='client_secret=e93447c4a3864354a8f2f829677b6cca'
let dato3='grant_type=client_credentials'

// 3. configuro la peticion
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}


// consumir el servicio
export async function generarToken(){

// proceso asincrono
    let respuesta = await fetch(URI,PETICION)
    return (respuesta.json())

}