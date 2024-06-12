const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const userSchema = Schema({
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
    skills: {
        
    }
})

const User = model('users', userSchema)

module.exports = User