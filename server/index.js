const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const middleware =  require('./middlewares/authMiddleware')
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
// app.use(middleware)
app.use('/api/auth', authRoutes);
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
      console.log('Server is running on port 9987');
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
