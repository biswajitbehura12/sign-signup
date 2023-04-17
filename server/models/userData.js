const mongoose = require('mongoose');

const UserSchemaAssign = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
   
},{
    timestamps: true,
})

module.exports = mongoose.model('userDataAssignMent', UserSchemaAssign);