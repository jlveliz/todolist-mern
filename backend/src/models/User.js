const {Schema, model} = require('mongoose');


const useSchema =  new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps : true
})

module.exports = model('User', useSchema)