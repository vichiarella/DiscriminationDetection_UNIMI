const Domain = require('../model/Domain');

// Create a Domain
exports.createDomain = async (req, res) => {
    const { domain } = req.body;
    try {
      const newDomain = new Domain({ domain });
      const savedDomain = await newDomain.save();
      res.status(201).json(savedDomain);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Get all Domains
exports.getAllDomains = async (req, res) => {
try {
    const domains = await Domain.find();
    res.status(200).json(domains.map( x=> ({ 
      _id: x.id,
      domain: x.domain
    })));
} catch (error) {
    res.status(500).json({ message: error.message });
}
};