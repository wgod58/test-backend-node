import Sequelize from 'sequelize'
import database from '../database'

export default database.define(
  'test',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  // timestamps: true (will auto input time in createdAt and updatedAt columns)
  { underscored: false, timestamps: true },
)
