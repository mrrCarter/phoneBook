const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');


//Retrieve contacts 
router.get('/contacts', (req, res, next) => {
    // res.send('Retrieving the contact list');
    //logic to get contacts
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//Add contact 
router.post('/contact', (req, res, next) => {
    //logic to add contact
    console.log('we reached this point');
    let newContact = new Contact ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    })
    newContact.save((err, contact) => {
        console.log(contact)
        if(err){
            res.json({message: 'Failed to add contact'});
        } else {
            res.json({message: 'Contact added successfully!'});
        }
    })
});

//delete contacts
router.delete('/contact/:id', (req, res, next) => {//:id means delete it using its particular id
    //logic to add contacts
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json('Error deleting contact');
        } else {
            res.json(result);
        }

    })
});

module.exports = router;
