var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize')
  , sequelize = module.parent.exports.sequelize
  , app = require('app');
exports.sequelize = sequelize;
/* GET home page. */

var User = require('../models/employess.js');

app.get('/', function(req,res){
    User.findAll().complete(function(err, results) {
    //console.log(results);
    if (!!err) {
      console.log('An error occurred while searching for John:', err)
    } else if (!results) {
      console.log('No user with the username "john-doe" has been found.')
    } else {
      console.log('Hello ' + results.nombre + '!')
      console.log('All attributes of john:', results.value)
    }
    });
});

module.exports = router;
