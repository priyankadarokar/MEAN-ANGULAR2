const express = require('express');
const app = express();
const crypto = require('crypto').randomBytes(256).toString('hex')
const mongoose = require('mongoose');
const config = require('./Config/database');
const path = require('path');

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/mean-angular2',{ useNewUrlParser: true },(err) =>{
if(err){
    console.log('could not connect to database '+ err);
}
else{
    console.log(crypto);
    console.log('connected to database '+ 'mean-angular2');
}
});

app.use(express.static(__dirname + '/client/dist/client/'))
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
  });
  
  app.listen(3000, () => {
      console.log("listening on port 8080");
  });