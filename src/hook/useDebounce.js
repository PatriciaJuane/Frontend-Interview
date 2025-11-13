import { useEffect, useState } from "react";
const useDebounce = (query, delay) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);
    return () => clearTimeout(timer);
  }, [query, delay]);
  return debouncedQuery;
};

export default useDebounce;
