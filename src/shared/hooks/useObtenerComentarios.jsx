import toast from "react-hot-toast";
import {obtenerComentarios} from "../../services/api";


export const useObtenerComentarios = (id) => {
    const [comentarios, setComentarios] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchComentarios = useCallback(async () => {
        setLoading(true)
        try {
            const response = await obtenerComentarios(id)
            if (response.error) {
                throw new Error(response.message)
            }
            setComentarios(response.data)
        } catch (err) {
            setError(err.message)
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }, [id])

    useEffect(() => {
        fetchComentarios()
    }, [fetchComentarios])

    return { comentarios, loading, error }
}