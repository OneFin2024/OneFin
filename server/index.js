const express = require('express');
const db = require('./Models');
const authRoutes = require('./routes/authRoutes');

const middleware =  require('./middlewares/authMiddleware')


const applicantInformationRoutes = require('./routes/LoanProgrameRoutes/applicantInformation.routes');
const businessDetailsRoutes = require('./routes/LoanProgrameRoutes/businessDetails.Routes');
const businessFinancialInformationRoutes = require('./routes/LoanProgrameRoutes/businessFinancialInformation.Routes');
const contactInformationRoutes = require('./routes/LoanProgrameRoutes/contactInformation.Routes');
const generalInfoRoutes = require('./routes/LoanProgrameRoutes/generalInfo.Routes');
const loanApplicationRoutes = require('./routes/LoanProgrameRoutes/loanApplication.Routes');
const requestDetailsRoutes = require('./routes/LoanProgrameRoutes/requestDetails.Routes');
const PrequalifyRoutes = require('./routes/Prequalify.Routes');







require('dotenv').config();
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: '*', // allow requests from all origins
  optionsSuccessStatus: 200,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};  







app.use(cors(corsOptions));
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({ message: 'Internal Server Error' }); // Respond with a generic error message
});

// Define routes
// app.use(middleware)
app.use('/api/auth', authRoutes);
app.use('/api/loanApplication', loanApplicationRoutes);
app.use("/api/applicantInformation", applicantInformationRoutes);
app.use('/api/businessDetails', businessDetailsRoutes);
app.use('/api/businessFinancialInformation', businessFinancialInformationRoutes);
app.use('/api/contactInformation', contactInformationRoutes);
app.use('/api/generalInfo', generalInfoRoutes);
app.use('/api/requestDetails', requestDetailsRoutes);
app.use('/api/Prequalify', PrequalifyRoutes);



app.post('/loan-application', async (req, res) => {
  try {
    const loanApplication = await db.LoanPrequalify.create(req.body);
    res.status(201).json(loanApplication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(9987, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
 

  // db.sequelize.sync({ alter: true })
  // .then(() => {
  //   console.log('Database sync successful');
  //   return db.sequelize.authenticate();
  // })
  // .then(() => {
  //   console.log('Connection has been established successfully.');
  //   app.listen(9987, () => {
  //     console.log('Server is running on port 9987');
  //   });
  // })
  // .catch(error => {
  //   console.error('Unable to sync the database:', error);
  // });
