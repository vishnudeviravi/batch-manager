const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const requestSchema = Schema({
    name: {
        type:String,
        required:true
    },
    mobile_no: {
        type:String,
        required:true
    },
    position: {
        type:String,
        required:true
    },

})

const Request = model('requests', requestSchema)

module.exports = Request