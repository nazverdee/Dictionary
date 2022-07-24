import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [word, setword] = useState(" ");

  function handleResponse(response) {
    alert(response.data);
  }

  function Search(event) {
    event.preventDefault();
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(api).then(handleResponse);
  }

  function updateWord(event) {
    setword(event.target.value);
  }

  return (
    <div className="input-group rounded">
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
    </div>
  );
}
