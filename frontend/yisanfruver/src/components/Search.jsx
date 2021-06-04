import React, { useState } from "react";
import "./styles/search.css";

function Search(props) {
  const products = props.products;
  const setWeight = props.setWeight;
  const addProduct = props.addProduct;

  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  const onSearchChange = (text) => {
    setSearching(true);
    setSearch(text.target.value);
  };

  return (
    <div className="content-search">
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          value={search}
          onChange={onSearchChange}
          type="text"
          placeholder="Search..."
        />
      </div>

      {searching ? (
        <div className="search-item">
          {products
            .filter(
              (product) =>
                product.name.toLowerCase().indexOf(search.toLocaleLowerCase()) >
                -1
            )
            .map((select) => (
              <div key={select.id} className="search-item-content">
                <p>{select.name}</p>
                <input onChange={(e)=>{setWeight(e.target.value)}} type="text" />
                <button onClick={(e=>{setSearching(false); return addProduct(e,select.id)})}>+</button>
              </div>
            ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Search;
