const pool = require('../database')

const productsCtrl = {};

productsCtrl.getProducts = async(req,res)=>{
    const products = await pool.query('SELECT * FROM product')
    res.json(products.rows)
}

module.exports = productsCtrl