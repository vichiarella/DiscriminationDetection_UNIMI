const Configuration = require('../model/Configuration');


exports.getConfiurationByKey = async (req, res) => {
    try {
        let { key } = req.params
        let value = null
        if(key)
            value = await Configuration.findOne({ key: key });

        if(value)
            res.status(200).json({"value": value.value})
        else res.status(404)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};