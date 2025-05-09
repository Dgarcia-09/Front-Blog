import {useEffect, useState, useCallback} from 'react'
import toast from 'react-hot-toast'
import { listarPublicaciones } from '../../services'


export const usePublicacion = () => {
    const [publicaciones, setPublicaciones] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const fetchPublicaciones = useCallback(async () => {
        setLoading(true)
        try {
        const response = await listarPublicaciones()
        if (response.error) {
            throw new Error(response.message)
        }
        setPublicaciones(response.data)
        } catch (err) {
        setError(err.message)
        toast.error(err.message)
        } finally {
        setLoading(false)
        }
    }, [])
    
    useEffect(() => {
        fetchPublicaciones()
    }, [fetchPublicaciones])
    
    return { publicaciones, loading, error }
    }
