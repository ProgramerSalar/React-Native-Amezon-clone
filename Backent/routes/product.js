import express from "express"
import { newProduct } from "../controllers/product.js"
import { singleUpload } from "../middleware/multer.js"




const router = express.Router()
router.post('/newProduct',singleUpload ,newProduct )







export default router