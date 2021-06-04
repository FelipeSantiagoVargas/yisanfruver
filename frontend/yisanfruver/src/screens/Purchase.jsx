import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

function Purchase() {
  const [items, setItems] = useState([]);
  const headers = ["Item", "Su", "Price__", "Sale_", "Am."];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/purchases");
      setItems(data);
    };
    fetchData();
    console.log(items);
    return () => {
      //
    };
  }, []);

  const setField = (e) => {
    let aux = items.slice();
    switch (e.target.name.substr(1)) {
      case "price_purchase":
        let element = aux.find((el) => el.id_product == e.target.name[0]);
        console.log(element)
        if (element) {
          element.price_purchase = e.target.value;
        }
        break;
      case "price_sale":
        let element_sale = aux.find((el) => el.id_product == e.target.name[0]);
        if (element_sale) {
            element_sale.price_sale = e.target.value;
        }
        break;
      case "amount":
        let element_amount = aux.find((el) => el.id_product == e.target.name[0]);
        if (element_amount) {
            element_amount.amount = e.target.value;
        }
        break;
      default:
        break;
    }
    console.log(aux)
    setItems(aux);
  };

  const savePurchase = async (e) => {
    await axios.put('api/purchases/updatePurchase',{
        items:JSON.stringify(items),
      })
      alert('Compra guardada correctamente')
  };

  return (
    <div className="addpurchase-global">
      <div className="addpurchase-header">
        <h1>Purchase</h1>
      </div>
      <div className="addpurchase-content">
        <Table items={items} headers={headers} setField={setField} savePurchase={savePurchase}></Table>
      </div>
    </div>
  );
}

export default Purchase;
