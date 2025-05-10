import {useState, useEffect} from 'react';
import {obtenerComentarios as getComentariosRequest} from '../../services/api';

export const useObtenerComentarios = (id) =>{
    const [comentarios, setComentarios] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getComentariosDetails = async () =>{
            try{
                const response = await getComentariosRequest(id)

                if(response?.data?.comentarios){
                    setComentarios(response.data.comentarios)
                }else{
                    throw new Error("Esta publicacion aun no tiene comentarios. !Se el primero en comentar! 😁")
                }
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        getComentariosDetails()
    }, [id])
    return {
        comentarios,
        loading,
        error
    }
}