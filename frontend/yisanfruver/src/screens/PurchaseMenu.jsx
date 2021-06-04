import React from "react";
import "./styles/purchaseMenu.css";
import { Link } from "react-router-dom";

function PurchaseMenu() {
  return (
    <div className="purchase-menu-global">
      <div className="purchase-menu-content">
        <Link to="/addPurchase" className="link">
          <div className="purchase-menu-item">
            <p>Add Purchase</p>
          </div>
        </Link>

        <Link to="/purchase" className="link">
          <div className="purchase-menu-item">
            <p>Purchase</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PurchaseMenu;
