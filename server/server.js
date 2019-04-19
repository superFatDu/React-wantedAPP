const express = require('express');
const mongoose = require('mongoose');

// 链接mongo
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
  console.log('success');
});

// 类似于MySQL，Mongo里有文档，字段的概念 Schema/Model
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, required: true },
  age: { type: Number, required: true }
}));
// 新增数据
/*User.create({
  user: 'Robin',
  age: 25
}, (err, doc) => {
  !err ? console.log(doc) : console.log(err);
});*/

let person = new User({
  user: 'superFatDu',
  age: 26
});
/*person.save((err, doc) => {
  !err ? console.log(doc) : console.log(err);
});*/

const app = new express();

app.get('/', (req, res) => {
  //res.send('<h1>hello express</h1>');
  /*User.where({
    user: 'superFatDu'
  }).update({
    user: 'Bob'
  }, (err, doc) => {
    res.json(doc);
  })*/
  /*User.update({
    user: "Robin"
  }, {
    $set: {
      user: "Du"
    }
  }, (err, doc) => {
    res.json(doc);
  })*/
  User.remove({
    user: "Du"
  }, (err, doc) => {
    res.json(doc);
  })
});

app.get('/data', (req, res) => {
  // res.json({ name: 'Robin', age: 25, city: 'BJ' });
  User.find({
    user: 'superFatDu'
  }, (err, doc) => {
    !err ? res.send(doc) : console.log(err);
  })
});

app.listen(9090, () => {
  console.log('Node app start at port 9090');
});