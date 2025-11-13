import { useEffect, useState, useRef } from "react";
import fetchSuggestions from "../api/fetchSuggestions";


const useFetchSuggestions = (query) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setdata] = useState(undefined);
  const controllerRef = useRef(null);


  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;


    const loadSuggestions = async () => {
      setLoading(true);
      try {
        const data = await fetchSuggestions(query, controllerRef.current.signal);
        setdata(data);
        setError(false);
      } catch (e) {
        setError(true);
        setdata(undefined);
      } finally {
        setLoading(false);
      }
    };


    loadSuggestions();
    return () => controller.abort()
  }, [query]);


  return {
    loading,
    error,
    data,
  };
};


export default useFetchSuggestions;