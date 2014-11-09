var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize')
  , sequelize = module.parent.exports.sequelize
  , app = module.parent.exports.app;
        
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
       // res.end('holis');
      res.render('index', {title: 'Listado', obj: results})
    }
    });
});
app.get('/employees/delete/:id', function(req,res){
    User.find({where: {idEmployee:req.params.id}}).success(function(employee) {
      employee.destroy().success(function() {
        res.redirect('/');
      }).error(function(err) { console.log(err); });
    });
});
app.get('/employees/new', function(req, res){
    res.render('users', {title: 'New employeer'})
})
app.post('/employees/new', function(req, res){
    User.create({
        nombre: req.param('nombre'),
        apellido: req.param('apellido'),
        email: req.param('email'),
        hashed_password: req.param('hashed_password')
    }).complete(function(err, user){
        console.log(user);
        res.redirect('/');
    }) 
});
module.exports = router;