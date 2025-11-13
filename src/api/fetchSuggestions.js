const fetchSuggestions = async(query, signal) => {
    try {
        let suggestions = await fetch(`https://api.datamuse.com/sug?s=${query}`,{signal});
        suggestions = await suggestions.json()
        suggestions = suggestions.map(suggestion => suggestion.word);
        return suggestions
    } catch(e) {
        throw new Error("Something went wrong")
    }
}      


export default fetchSuggestions;
