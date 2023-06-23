import express from 'express'
import cors from 'cors'
import ProductRoutes from './routes/ProductRoutes.js'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/', ProductRoutes)

app.listen(port, () => console.log(`server running on ${port}`))
