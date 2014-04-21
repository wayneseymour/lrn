//https://github.com/visionmedia/express/wiki/Migrating-from-3.x-to-4.x
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.connect('mongodb://localhost/simple')

var personSchema = {
  firstName: String,
  lastName: String,
  email: String
}

var Person = mongoose.model('Person', personSchema, 'people')

var app = express();
app.use(cors());
app.use(bodyParser());

app.route('/people')
  .get(function(req, res) {
    Person.find().select("firstName").limit(10).exec(function(err, doc) {
      res.send(doc);
    })
  })
.post(function(req, res) {
  Person.update({
    _id: req.body._id
  }, {
    firstName: req.body.firstName
  }, function(err) {
    res.send(req.body)
  })
});

app.get('/people/:id', function(req, res) {
  Person.findById(req.params.id, function(err, doc) {
    res.send(doc);
  })
})

app.listen(3000);
