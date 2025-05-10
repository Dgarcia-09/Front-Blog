import {  useEffect, useState } from "react";
import { listarPublicaciones as getPublicacionesRequest} from "../../services/api"


export const useListarPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getPublicaciones = async () => {
            try{
                const response = await getPublicacionesRequest()

                if(response && response.data && Array.isArray(response.data.publicaciones)){
                    setPublicaciones(response.data.publicaciones)
                }else{
                    throw new Error("La respuesta no contiene un array de publicaciones")

                }
            }catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        getPublicaciones()
    }, [])
    return {
        publicaciones,
        loading,
        error
    }
}