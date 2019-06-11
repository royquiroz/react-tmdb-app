import React, { useState, useEffect } from "react";
import { SearchMovie } from "../../../services/search/searchs";
import "./searchbar.css";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (query.length < 2) return;
    const fetchData = async () => {
      const result = await SearchMovie(query);
      let options = result.data.results
        .sort((a, b) => a.vote_average - b.vote_average)
        .reverse()
        .slice(0, 5);

      setValues(options);
    };
    fetchData();
  }, [query]);

  return (
    <div className="navbar-item">
      <input
        className="input"
        type="text"
        list="values"
        placeholder="Buscar..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <datalist id="values">
        {values.map((e, i) => (
          <option key={i}>{e.title}</option>
        ))}
      </datalist>
    </div>
  );
}
