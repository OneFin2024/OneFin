const db = require('../../Models/index');

module.exports = {
  getAllBusinessFinancialInformation: async (req, res) => {
    try {
      const businessFinancialInformation = await db.BusinessFinancialInformation.findAll({});
      res.json(businessFinancialInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOneBusinessFinancialInformation: async (req, res) => {
    try {
      const businessFinancialInformation = await db.BusinessFinancialInformation.findByPk(req.params.id);
      if (!businessFinancialInformation) {
        return res.status(404).json({ error: 'Business financial information not found' });
      }
      res.json(businessFinancialInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  addBusinessFinancialInformation: async (req, res) => {
    try {
      const newBusinessFinancialInformation = await db.BusinessFinancialInformation.create(req.body);
      res.json(newBusinessFinancialInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteBusinessFinancialInformation: async (req, res) => {
    try {
      await db.BusinessFinancialInformation.destroy({ where: { idBusinessFinancialInformation: req.params.id } });
      res.json({ message: 'Business financial information deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateBusinessFinancialInformation: async (req, res) => {
    try {
      const updatedBusinessFinancialInformation = await db.BusinessFinancialInformation.update(req.body, {
        where: { idBusinessFinancialInformation: req.params.id }
      });
      res.json(updatedBusinessFinancialInformation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
