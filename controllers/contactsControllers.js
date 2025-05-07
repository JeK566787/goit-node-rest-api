import contacts from '../services/contactsServices.cjs';

export const getAllContacts = async (req, res) => {
    const result = await contacts.getAll();
    res.json(result);
};

export const getOneContact = async (req, res) => {
    const { id } = req.params;
    const result = await contacts.getById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

export const deleteContact = async (req, res) => {
    const { id } = req.params;
    const result = await contacts.deleteById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    // res.status(204).send()
    res.json({
        message: "Delete success"
    })
};

export const createContact = async (req, res) => {
    const result = await contacts.add(req.body);
    res.status(201).json(result);
};

export const updateContact = async (req, res) => {
    const { id } = req.params;
    const result = await contacts.updateById(id, req.body);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

export const updateContactByPatch = async (req, res) => {
    const { id } = req.params;
    const result = await contacts.updateByPatch(id, req.body);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};
