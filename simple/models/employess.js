var Sequelize = require('sequelize')
  , sequelize = module.parent.exports.sequelize;

//console.log('holis');
var User = sequelize.define('Employees', {
  idEmployee: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  email: Sequelize.STRING,
  hashed_password: Sequelize.STRING,
}, {
  timestamps: false
})
module.exports = User;