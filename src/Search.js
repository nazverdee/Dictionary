import React, { useState } from "react";

export default function Search() {
  let [word, setword] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function updateWord(event) {
    setword(event.target.value);
  }

  return (
    <div className="input-group rounded">
      <form onSubmit={handleSubmit}>
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
