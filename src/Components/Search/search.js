import React, { useState, useEffect } from "react";
import "./search.css";

function Search({ onSubmit }) {
  const [input, setInput] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      input,
    });

    setInput("");
  }

  return (
    <section className="row">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            className="search__bar"
            name="input"
            id="input"
            required
            value={input}
            type="text"
            placeholder="Busque um filme por nome, ano ou gênero"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </section>
  );
}

export default Search;
