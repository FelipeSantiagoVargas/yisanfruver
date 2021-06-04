const pool = require("../database");

const purchasesCtrl = {};

purchasesCtrl.getPurchase = async (req, res) => {
  const purchases =
    await pool.query(`SELECT p.id, p.date, pr.id id_product, pr.name, i.amount_su, i.price_purchase, i.price_sale, i.amount FROM purchase as p join item as i on p.id=i.id_purchase join product as pr on pr.id= i.id_product
    WHERE p.id = (SELECT max(id) FROM purchase);`);
  res.json(purchases.rows);
};

purchasesCtrl.createPurchase = async (req, res) => {
  const date = new Date();

  const purchase = await pool.query(`INSERT INTO purchase(
        date, balance, id_state)
        VALUES ('${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}', ${req.body.balance}, '1');`);

  const purchaseId = await pool.query(`SELECT id FROM purchase
        WHERE id=(SELECT max(id) FROM purchase);`);

  const values = JSON.parse(req.body.items);

  for (let i = 0; i < values.length; i++) {
    const e = values[i];
    const response = await pool.query(`INSERT INTO item(
            id_product, id_purchase, amount_su)
            VALUES ('${e.id_product}', '${purchaseId.rows[0].id}', '${e.amount_su}');`);
  }

  res.json("Compra agregada con exito");
};

purchasesCtrl.updatePurchase = async (req, res) => {
  const items = JSON.parse(req.body.items);
  console.log(items)

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log(item)
    const response = await pool.query(`UPDATE item
        SET price_purchase=${item.price_purchase}, price_sale=${item.price_sale}, amount=${item.amount}
        WHERE id_purchase=${item.id}
        AND id_product=${item.id_product};`);
  }

  await pool.query(`UPDATE purchase
        SET id_state=3
        WHERE id=${items[0].id};`)

  res.json('Se ha actualizado la informacion con exito');
};

module.exports = purchasesCtrl;
