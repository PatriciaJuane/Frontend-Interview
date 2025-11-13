const SuggestionsList = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.map((suggestion) => {
        return <li key={suggestion}>{suggestion}</li>;
      })}
    </ul>
  );
};


export default SuggestionsList;