var mongoose = require('mongoose');
const validator = require('validator');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var ContactSchema = new Schema({
    name: String,
    phone: Number,
    dateOfEvent: String,
    typeOfEvent: String,
    venue: String,
    details: String
},
{
  unique:true, sparse:true
});

module.exports = mongoose.model('contact_details', ContactSchema);