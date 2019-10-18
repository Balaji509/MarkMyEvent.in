var express = require('express')
var _ = require('lodash');

var partner = require('../../models/contact_details');

function contact_details(req) {
    var obj = _.pick(req.params, ['_id']);
    return new Promise(function (fulfill, reject) {
        
       var data = new data(contact_details);

        var reqObj = _.pick(req.body, ['name', 'date', 'typeOfEvent', 'venue','details']);

        for (var key in reqObj) {
            if (reqObj.hasOwnProperty(key)) {
                var val = reqObj[key];
                data[key] = val;
            }
        }
        data.save().then(
            (response) => {
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
