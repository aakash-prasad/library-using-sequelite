const Sequelize = require('sequelize')
const {conn} = require('../connection');

const BookIssue = conn.define({
  customer_id :{
    type: Sequelize.INTEGER,
    allowNull: false
  },

  book_id :{
    type: Sequelize.INTEGER,
    allowNull: false
  },

  issue_date :{
    type: Sequelize.DATEONLY,
    allowNull: false
  }
});

module.exports = BookIssue;