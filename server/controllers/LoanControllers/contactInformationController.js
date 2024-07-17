const db = require('../../Models/index');

module.exports = {
  getAllContactInformation: async (req, res) => {
    try {
      const contactInformation = await db.ContactInformation.findAll({});
      res.json(contactInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOneContactInformation: async (req, res) => {
    try {
      const contactInformation = await db.ContactInformation.findByPk(req.params.id);
      if (!contactInformation) {
        return res.status(404).json({ error: 'Contact information not found' });
      }
      res.json(contactInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  addContactInformation: async (req, res) => {
    try {
      const newContactInformation = await db.ContactInformation.create(req.body);
      res.json(newContactInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteContactInformation: async (req, res) => {
    try {
      await db.ContactInformation.destroy({ where: { idContactInformation: req.params.id } });
      res.json({ message: 'Contact information deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateContactInformation: async (req, res) => {
    try {
      const updatedContactInformation = await db.ContactInformation.update(req.body, {
        where: { idContactInformation: req.params.id }
      });
      res.json(updatedContactInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
