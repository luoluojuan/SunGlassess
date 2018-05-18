let express = require('express');
let route = express.Router();
let loginDB = require('../db/loginDB');


//查询所有
route.get('/findAll',(req,resp)=>{
    loginDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;

