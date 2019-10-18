var mongoose = require('mongoose');
const validator = require('validator');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var VendorSchema = new Schema({
    name: String,
    phone: Number,
    service: String,
    area: String
},
{
  unique:true, sparse:true
});

module.exports = mongoose.model('vendor_details', VendorSchema);
