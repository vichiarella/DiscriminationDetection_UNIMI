const DataProvider = require('../model/DataProvider');

exports.getAllDataprovider= async (req, res) => {
    try {
        const roles = await DataProvider.find();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};