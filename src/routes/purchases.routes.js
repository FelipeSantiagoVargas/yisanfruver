const{ Router } = require('express')

const router = Router()

const purchasesCtrl = require('../controllers/purchases.controller.js')

router.get('/', purchasesCtrl.getPurchase)
router.post('/createPurchase', purchasesCtrl.createPurchase)
router.put('/updatePurchase', purchasesCtrl.updatePurchase)


module.exports = router