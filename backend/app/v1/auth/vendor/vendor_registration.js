var express = require('express')
var _ = require('lodash');

var partner = require('../../models/vendor_details');

function vendor_registration(req) {
    var obj = _.pick(req.params, ['_id']);
    return new Promise(function (fulfill, reject) {
        
       var data = new data(vendor_details);

        var reqObj = _.pick(req.body, ['name', 'phone', 'service', 'area']);

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
    vendor_registration
};
