const db = require('../../Models/index');

module.exports = {
  getAllLoanApplications: async (req, res) => {
    try {
      const loanApplications = await db.LoanApplication.findAll({});
      res.json(loanApplications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOneLoanApplication: async (req, res) => {
    try {
      const loanApplication = await db.LoanApplication.findByPk(req.params.id);
      if (!loanApplication) {
        return res.status(404).json({ error: 'Loan application not found' });
      }
      res.json(loanApplication);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  addLoanApplication: async (req, res) => {
    try {
      const newLoanApplication = await db.LoanApplication.create(req.body);
      res.json(newLoanApplication);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteLoanApplication: async (req, res) => {
    try {
      await db.LoanApplication.destroy({ where: { idLoanApplication: req.params.id } });
      res.json({ message: 'Loan application deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateLoanApplication: async (req, res) => {
    try {
      const updatedLoanApplication = await db.LoanApplication.update(req.body, {
        where: { idLoanApplication: req.params.id }
      });
      res.json(updatedLoanApplication);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
