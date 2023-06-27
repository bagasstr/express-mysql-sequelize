import { Sequelize } from 'sequelize'

const db = new Sequelize('database_erick', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

export default db
