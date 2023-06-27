import express from 'express'
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from '../controller/ProductController.js'

const router = express.Router()

router.get('/api/product', getProduct)
router.get('/api/product/:id', getProductById)
router.post('/api/product', addProduct)
router.patch('/api/product/:id', updateProduct)
router.delete('/api/product/:id', deleteProduct)

export default router
