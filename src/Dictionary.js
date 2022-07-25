import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Search(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function Search() {
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(api).then(handleResponse);

    let pexelsApi = "563492ad6f91700001000001088787aba00b43238d90ba5d23109f6e";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    //authorization
    let headers = { Authorization: `Bearer ${pexelsApi}` };
    //axios
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelResponse);
  }

  function updateWord(event) {
    setkeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="Dictionary input-group rounded">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              onChange={updateWord}
              defaultValue={props.defaultKeyword}
              className="form-control search-input"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
