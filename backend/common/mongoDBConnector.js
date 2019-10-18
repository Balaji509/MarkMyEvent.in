// const express = require('express')
var mongoose=require('mongoose');
// const app = express()

var config;
if(process.env.NODE_ENV == 'dev')
     config = require('../config/dev.json');

mongoose.Promise=global.Promise;
//mongoose.connect( process.env.MONGODB_URI || config.mongodb.url,{ useNewUrlParser: true } );
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/mme" );

module.exports = {mongoose};
