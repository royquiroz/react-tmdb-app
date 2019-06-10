import React, { useState, useEffect } from "react";
import { SearchMovie } from "../../../utils/services/search/searchs";

export default function SearchBar(props) {
  //let values = ["nada", "nadadenada", "nariz"];
  const [query, setQuery] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await SearchMovie(query);
      setValues(result.data.results);
    };
    fetchData();
  }, [query]);

  //console.log(SearchMovie);

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
