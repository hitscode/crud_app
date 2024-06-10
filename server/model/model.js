const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name :{
        type: 'string',
        require : true
    },
    email:{
        type : 'string',
        require : true,
        unique : true
    }, 
    gender : 'string',
    status: 'string'
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;