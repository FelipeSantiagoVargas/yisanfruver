import React, { useEffect } from "react";
import "./styles/addPurchase.css";
import Search from "../components/Search";
import Table from "../components/Table";
import axios from "axios";
import { useState } from "react";

function AddPurchase(props) {
  const [products, setProducts] = useState([]);
  const [weight, setWeight] = useState("0");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  const addProduct = (e, idProduct) => {
    if (items.find((i) => i.id === idProduct)) {
      alert("Este producto ya habia sido agregado");
    } else {
      let product = products.find((p) => p.id === idProduct);
      product.weight = weight;
      let addItems = items.slice();
      addItems.push(product);
      setItems(addItems);
    }
  };

  const createPurchase = async (e) =>{
    const sendItems = []
    items.forEach(e=>{
      sendItems.push({id_product:e.id,amount_su:e.weight})
    })
    const res = await axios.post('api/purchases/createPurchase',{
      items:JSON.stringify(sendItems),
      balance:0
    })
    alert('Compra creada exitosamente')
  }

  return (
    <div className="addpurchase-global">
      <div className="addpurchase-header">
        <h1>Purchase</h1>
      </div>

      <div className="addpurchase-content">
        <Search
          products={products}
          setItems={setItems}
          setWeight={setWeight}
          addProduct={addProduct}
        ></Search>
        <Table items={items} createPurchase={createPurchase}></Table>
      </div>
    </div>
  );
}

export default AddPurchase;
