import React, { useState } from "react";
import "./styles/table.css";

function Table(props) {
  const headers = props.headers;
  const items = props.items;
  const createPurchase = props.createPurchase;
  const savePurchase = props.savePurchase;
  const setField = props.setField;

  return (
    <div className="items">
      <table className="items-purchase">
        <thead>
          {headers ? (
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          ) : (
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          )}
        </thead>
        <tbody>
          {headers
            ? items.map((item) => (
                <tr key={item.id_product}>
                  <td>{item.name}</td>
                  <td>{item.amount_su}</td>
                  <td>
                    <input
                      name={item.id_product + "price_purchase"}
                      onBlur={setField}
                    ></input>
                  </td>
                  <td>
                    <input
                      name={item.id_product + "price_sale"}
                      onBlur={setField}
                    ></input>
                  </td>
                  <td>
                    <input
                      name={item.id_product + "amount"}
                      onBlur={setField}
                    ></input>
                  </td>
                </tr>
              ))
            : items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.weight}</td>
                </tr>
              ))}
        </tbody>
      </table>
      {headers ? (
        <button className="items-send" onClick={savePurchase}>
          Send
        </button>
      ) : (
        <button className="items-send" onClick={createPurchase}>
          Send
        </button>
      )}
    </div>
  );
}

export default Table;
