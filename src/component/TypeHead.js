import { useState } from "react";
import useFetchSuggestions from "../hook/useFetchSuggestions";
import SuggestionsList from "./SuggestionsList";
import useDebounce from "../hook/useDebounce";


const TypeHead = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const {
    loading,
    data: suggestions,
    error,
  } = useFetchSuggestions(debouncedQuery);




  const handleOnchange = (event) => {
    setQuery(event.target.value);
  };


  return (
    <>
      <div className="container">
        <input
          className="input-box"
          value={query}
          onChange={handleOnchange}
          type="text"
          placeholder="Search here"
        />
        {loading && <div>Loading...</div>}
        {error && <div>Something Went wrong</div>}


        {!loading &&
          suggestions &&
          (suggestions.length === 0 ? (
            <div>No data Found</div>
          ) : (
            <SuggestionsList suggestions={suggestions} />
          ))}
      </div>
    </>
  );
};


export default TypeHead;
