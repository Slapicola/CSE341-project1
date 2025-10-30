const mongodb = require('../routes/data/database');
const objectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('Contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts)
    })
};

const getContact = async (req, res) => {
    const contactId = new objectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('Contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts[0])
    })
};

module.exports = {getAllContacts, getContact}