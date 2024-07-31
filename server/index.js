const express = require('express');
const db = require('./Models');
const authRoutes = require('./routes/authRoutes');
const multer = require('multer');
const { detectText } = require('./features/documentScan');
const path = require('path');
const middleware = require('./middlewares/authMiddleware');

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
  origin: '*',
  optionsSuccessStatus: 200,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads')); // Destination folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Original file name
  }
});

const upload = multer({ storage });

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/loanApplication', loanApplicationRoutes);
app.use("/api/applicantInformation", applicantInformationRoutes);
app.use('/api/businessDetails', businessDetailsRoutes);
app.use('/api/businessFinancialInformation', businessFinancialInformationRoutes);
app.use('/api/contactInformation', contactInformationRoutes);
app.use('/api/generalInfo', generalInfoRoutes);
app.use('/api/requestDetails', requestDetailsRoutes);
app.use('/api/Prequalify', PrequalifyRoutes);

// File upload endpoint
app.post('/api/uploadDoc', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file was uploaded.');
  }

  const filePath = path.join(__dirname, 'uploads', req.file.filename);

  try {
    const extractedData = await detectText(filePath);
    res.send(extractedData);
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).send('Error processing file.');
  }
});

// Loan application endpoint
app.post('/loan-application', async (req, res) => {
  try {
    const loanApplication = await db.LoanPrequalify.create(req.body);
    res.status(201).json(loanApplication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(3001, () => {
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
