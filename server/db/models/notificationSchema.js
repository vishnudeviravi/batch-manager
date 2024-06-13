const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const notificationSchema = Schema({
    number_array: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        required:true
    },

})

const Notification = model('notifications', notificationSchema)

module.exports = Notification