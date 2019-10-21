var express = require('express')
var _ = require('lodash');

var contact_details = require('../../models/contact_details');

function contact_details(req) {
   // var obj = _.pick(req.params, ['_id']);
    return new Promise(function (fulfill, reject) {

       var reqObj = _.pick(req.body, ['name', 'dateOfEvent', 'typeOfEvent', 'venue','details','phone']);
        
       var data = new contact_details(reqObj);

        for (var key in reqObj) {
            if (reqObj.hasOwnProperty(key)) {
                var val = reqObj[key];
                data[key] = val;
            }
        }
        data.save().then(
            (response) => {
                console.log(response)
                fulfill(response);
            }
        ).catch(
            (err) => {
                reject(err);
            }
        )
    })
}

module.exports = {
    contact_details
};
