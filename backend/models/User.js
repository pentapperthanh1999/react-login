const mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectID;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    firstname: {
        type: String,
        required:true,
        min: 6,
        max: 255
    },
    lastname: {
        type: String,
        required:true,
        min: 6,
        max: 255
    },
    language: {
        type: String,
        required:true,
        min: 6,
        max: 255
    },
    position: {
        type: String,
        required:true,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.new
    },
    tasks: [{
        type: ObjectId,
        ref: "Task"
    }]
});

module.exports = mongoose.model('User', userSchema);