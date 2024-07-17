const db=require('../../Models/index');

module.exports = {


    getAllApplicants: async (req, res)=>{
        try {
          const applicantInformation = await db.ApplicantInformation.findAll({});
          res.json(applicantInformation);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
        },
    getOneApplicant : async (req, res) => {
            try {
              const applicantInformation = await db.ApplicantInformation.findByPk(req.params.id);
              if (!applicantInformation) {
                return res.status(404).json({ error: 'Applicant information not found' });
              }
              res.json(applicantInformation);
            } catch (error) {
              res.status(500).json({ error: error.message });
            }
          },
    addApplicant:async (req, res) => {
            try {
              const newApplicantInformation = await db.ApplicantInformation.create(req.body);
              res.json(newApplicantInformation);
            } catch (error) {
              res.status(500).json({ error: error.message });
            }
          },
    deleteApplicant: async  (req, res) => {
            try {
            await db.ApplicantInformation.destroy({ where: { idApplicantInformation: req.params.id } });
            res.json({ message: 'Applicant information deleted successfully' });
            } catch (error) {
            res.status(500).json({ error: error.message });
            }
        }, 
    updateApplicant:async (req, res) => {
            try {
              const updatedApplicantInformation = await ApplicantInformation.update(req.body, {
                where: { idApplicantInformation: req.params.id }
              });
              res.json(updatedApplicantInformation);
            } catch (error) {
              res.status(500).json({ error: error.message });
            }
          }





}