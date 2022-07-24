import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Search() {
  let [keyword, setkeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(api).then(handleResponse);
  }

  function updateWord(event) {
    setkeyword(event.target.value);
  }

  return (
    <div className="Dictionary input-group rounded">
      <form onSubmit={Search}>
        <input
          type="search"
          placeholder="Search"
          onChange={updateWord}
          className="form-control rounded"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
