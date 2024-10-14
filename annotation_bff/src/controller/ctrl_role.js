const Role = require('../model/Role');

exports.createRole = async (req, res) => {
    const { role } = req.body;
    try {
      const newRole = new Role({ role });
      const savedRole = await newRole.save();
      res.status(201).json(savedRole);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Get all Roles
exports.getAllRoles = async (req, res) => {
try {
    const roles = await Role.find();
    res.status(200).json(roles);
} catch (error) {
    res.status(500).json({ message: error.message });
}
};