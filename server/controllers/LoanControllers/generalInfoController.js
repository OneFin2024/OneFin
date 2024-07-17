const db = require('../../Models/index');

module.exports = {
  getAllGeneralInfo: async (req, res) => {
    try {
      const generalInfo = await db.GeneralInfo.findAll({});
      res.json(generalInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOneGeneralInfo: async (req, res) => {
    try {
      const generalInfo = await db.GeneralInfo.findByPk(req.params.id);
      if (!generalInfo) {
        return res.status(404).json({ error: 'General information not found' });
      }
      res.json(generalInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  addGeneralInfo: async (req, res) => {
    try {
      const newGeneralInfo = await db.GeneralInfo.create(req.body);
      res.json(newGeneralInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteGeneralInfo: async (req, res) => {
    try {
      await db.GeneralInfo.destroy({ where: { idGeneralInfo: req.params.id } });
      res.json({ message: 'General information deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateGeneralInfo: async (req, res) => {
    try {
      const updatedGeneralInfo = await db.GeneralInfo.update(req.body, {
        where: { idGeneralInfo: req.params.id }
      });
      res.json(updatedGeneralInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
