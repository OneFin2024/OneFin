const db = require('../../Models/index');

module.exports = {
  getAllBusinessDetails: async (req, res) => {
    try {
      const businessDetails = await db.BusinessDetails.findAll({});
      res.json(businessDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOneBusinessDetail: async (req, res) => {
    try {
      const businessDetail = await db.BusinessDetails.findByPk(req.params.id);
      if (!businessDetail) {
        return res.status(404).json({ error: 'Business detail not found' });
      }
      res.json(businessDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  addBusinessDetail: async (req, res) => {
    try {
      const newBusinessDetail = await db.BusinessDetails.create(req.body);
      res.json(newBusinessDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteBusinessDetail: async (req, res) => {
    try {
      await db.BusinessDetails.destroy({ where: { idBusinessDetails: req.params.id } });
      res.json({ message: 'Business detail deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateBusinessDetail: async (req, res) => {
    try {
      const updatedBusinessDetail = await db.BusinessDetails.update(req.body, {
        where: { idBusinessDetails: req.params.id }
      });
      res.json(updatedBusinessDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
