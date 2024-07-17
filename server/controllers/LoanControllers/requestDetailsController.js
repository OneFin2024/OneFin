const db = require('../../Models/index');

module.exports = {
  getAllRequestDetails: async (req, res) => {
    try {
      const requestDetails = await db.RequestDetails.findAll({});
      res.json(requestDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOneRequestDetail: async (req, res) => {
    try {
      const requestDetail = await db.RequestDetails.findByPk(req.params.id);
      if (!requestDetail) {
        return res.status(404).json({ error: 'Request detail not found' });
      }
      res.json(requestDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  addRequestDetail: async (req, res) => {
    try {
      const newRequestDetail = await db.RequestDetails.create(req.body);
      res.json(newRequestDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteRequestDetail: async (req, res) => {
    try {
      await db.RequestDetails.destroy({ where: { idRequestDetails: req.params.id } });
      res.json({ message: 'Request detail deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateRequestDetail: async (req, res) => {
    try {
      const updatedRequestDetail = await db.RequestDetails.update(req.body, {
        where: { idRequestDetails: req.params.id }
      });
      res.json(updatedRequestDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
