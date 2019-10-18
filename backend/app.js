const express = require('express')
const app = express()
const _ = require('lodash')
const modName = 'app'
var https = require('https');
var fs = require('fs');
const logger = require('./common/logger.js')
const modules = require('./config/dev.json')
const auth1 = require('./app/v1/auth/auth.js')
//const mysql = require('./common/mysqlConnector.js');
const mongodb_connector = require('./common/mongoDBConnector');

var bodyParser = require('body-parser');
//var port = Number(process.env.PORT || 8080);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methodss", 'GET,POST,PUT,DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

var config;
if(process.env.NODE_ENV == 'dev')
     config = require('./config/dev.json');

app.locals.config = config;
app.locals.logger = logger;

/*var options = {
  key: fs.readFileSync('domain.key'),
  cert: fs.readFileSync('domain.cer')
}; */

app.get('/', function (req, res) {
  res.send({
        "success": {
                "data": {
                    "response": 'Hello World!'
                },
                "description": "Response on root path"
        }
    })
})
app.use('/ms/'+ config.modules.version + '/' + auth1.modName  , require('./app/'+modules.version+ '/' +auth1.modName+'/'+auth1.modName+'.js')(app) );
/*_.forEach(config.modules, function(modValue, modName) {
    _.forEach(modValue, function(value, key) {
        _.forEach(value, function(version) {
            app.use('/ms/'+ version + '/' + modName  , require('./app/'+version + '/' +modName+'/'+modName+'.js')(app) );
        });
    });
});*/

app.use(function (req, res) {
    res.status(499).send({
        "error": {
            "errorCode" : "UNKNOWN_PATH",
            "description": "Unknown path request"
        }
    })
    // logger.log(logger.ERROR, modName, 'Unknown path request received');
})

//https.createServer(options, app).listen(8081);

app.listen(8080, function () {
    logger.log(logger.SILLY, modName, 'app listening on port::' + 8080);
})
