import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import {filtrarPublicaciones} from "../../services/api";

export const usePublicacionFiltrada = (filtro) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPublicacionesFiltradas = useCallback(async () => {
    setLoading(true);
    try {
      const response = await filtrarPublicaciones(filtro);
      if (response.error) {
        throw new Error(response.message);
      }
      setPublicaciones(response.data);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [filtro]);

  useEffect(() => {
    fetchPublicacionesFiltradas();
  }, [fetchPublicacionesFiltradas]);

  return { publicaciones, loading, error };
}