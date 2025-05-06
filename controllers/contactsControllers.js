import contacts from '../services/contactsServices.cjs';

export const getAllContacts = async (req, res) => {
    const result = await contacts.getAll();
    res.json(result);
};

export const getOneContact = (req, res) => { };

export const deleteContact = (req, res) => { };

export const createContact = (req, res) => { };

export const updateContact = (req, res) => { };
