const Sequelize = require('sequelize');
const {conn} = require('../connection')

const Customers = conn.define('Customers', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNo:{
    type: Sequelize.BIGINT(11),
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Customers;