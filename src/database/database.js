import { Sequelize } from 'sequelize'
import config from 'constants/config'

const { database } = config
export default new Sequelize(
  database.name,
  database.account,
  database.password,
  {
    host: database.host,
    dialect: 'mysql',
    logging: false, // Set true to print executing sql
  },
)
