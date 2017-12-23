const mongoose = require('mongoose');


//the Schema for contact
const contactSchema = mongoose.Schema({
    //string first name, required.
    first_name:{
        type: String,
        required: true
    },
    //string last name, not required but for now yes
    last_name:{
        type: String,
        required: true
    },
    //for now string phone number
    phone:{
        type: String,
        required: true
    }
});

//export this very schema
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;