var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var modName = 'auth';
var { admin_vendor_registration } = require('./vendor/vendor_registration');
var { admin_contact_details}  = require ('./contacts/contact_details');


router.use(bodyParser.json());

router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: false }));

function auth(app) {

    var logger = app.locals.logger;

    // middleware that is specific to this router
    router.use(function timeLog(req, res, next) {
        //logger.log(logger.SILLY, modName, "authRoute hit")
        next()
    })

    //partner mobile registration
    router.post('/vendor_registration', function (req, res) {
        admin_vendor_registration(req).then(
            (response) => {
                res.send(response);
                //  logger.log(logger.SILLY, modName, "authRoute/admin_partner_registration")
            }
        ).catch(
            (err) => {
                res.send(err);
            }
        )
    })

    router.post('/contact_details', function(req, res) {
        admin_contact_details(req).then(
            (response) => {
                res.send(response);
            }
        ).catch(
            (err) => {
                res.send(err);
            }
        )
    })

    return router;

}

module.exports = auth
