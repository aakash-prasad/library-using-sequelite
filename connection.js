const {Sequelize} = require('sequelize');

const connection = new Sequelize('seqlibrary', 'root', 'Aakash@123',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  conn: connection
}