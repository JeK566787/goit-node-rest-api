import contacts from '../services/contactsServices.cjs';

const handleError = (error, res) => {
    console.error("Error fetching contact:", error);
    res.status(500).json({ message: "Internal server error!!!" });
}

export const getAllContacts = async (req, res) => {
    try {
        const result = await contacts.getAll();
        res.json(result);
    }
    catch (error) {
        handleError(error, res);
    }
};

export const getOneContact = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await contacts.getById(id);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    }
    catch (error) {
        handleError(error, res);
    }

};

export const deleteContact = async (req, res) => {

    try {
        const { id } = req.params;
        const result = await contacts.deleteById(id);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        // res.status(204).send()
        res.json({
            message: "Delete success"
        })
    }
    catch (error) {
        handleError(error, res);
    }
};

export const createContact = async (req, res) => {

    try {
        const result = await contacts.add(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        handleError(error, res);
    }

};

export const updateContact = async (req, res) => {

    try {
        const { id } = req.params;
        const result = await contacts.updateById(id, req.body);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    }
    catch (error) {
        handleError(error, res);
    }

};

export const updateContactByPatch = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await contacts.updateByPatch(id, req.body);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    }
    catch (error) {
        handleError(error, res);
    }

};
