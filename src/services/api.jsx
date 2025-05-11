import axios from 'axios'
 
const apiBlog = axios.create({
    baseURL: "http://127.0.0.1:3001/Blog/v1",
    timeout: 3000,
    httpAgent: false
})
 
export const crearComentario = async (id, data) => {
    try{
        return await apiBlog.post(`/comentario/crear/${id}`, data)
    }catch(error){
        return{
            error: true,
            message: error.message
        }
    }
}
 
 
export const obtenerComentarios = async (id) => {
    try{
        return await apiBlog.get(`/comentario/listar/${id}`)
    }catch(error){
        return{
            error: true,
            message: error.message
        }
    }
}
 
export const listarPublicaciones = async () => {
    try{
        return await apiBlog.get(`/publicacion/listar`)
 
    }catch(error){
        return{
            error: true,
            message: error.message
        }
    }
}
 
export const filtrarPublicaciones = async (curso) => {
    try{
        return await apiBlog.get(`/publicacion/filtrar/${curso}`)
    }catch(error){
        return{
            error: true,
            message: error.message
        }
    }
}