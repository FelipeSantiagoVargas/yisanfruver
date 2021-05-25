const{ Router } = require('express')

const router = Router()

const productsCtrl = require('../controllers/products.controller.js')

router.get('/', productsCtrl.getProducts)


module.exports = router