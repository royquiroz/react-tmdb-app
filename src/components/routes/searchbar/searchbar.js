import React, { useState, useEffect } from "react";
import { SearchMovie } from "../../../services/search/movies";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (query.length < 2) return;
    const fetchData = async () => {
      const result = await SearchMovie(query);
      let options = JSON.parse(JSON.stringify(result));

      options = options.data.results
        .sort((a, b) => b.vote_average - a.vote_average)
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
          <option key={i}>
            {e.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
          </option>
        ))}
      </datalist>
    </div>
  );
}
