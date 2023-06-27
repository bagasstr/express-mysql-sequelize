import { Sequelize } from 'sequelize'
import db from '../config/Database.js'

const { DataTypes } = Sequelize

const Products = db.define(
  'productListing',
  {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    bathroom: { type: DataTypes.STRING },
    bedroom: { type: DataTypes.STRING },
    surfaceArea: { type: DataTypes.STRING },
    buildingArea: { type: DataTypes.STRING },
    developer: { type: DataTypes.STRING },
    certificate: { type: DataTypes.STRING },
    electical: { type: DataTypes.STRING },
    // image: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
)

export default Products
;(async () => {
  await Products.sync()
})()
