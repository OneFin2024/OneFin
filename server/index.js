const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: '*', // allow requests from all origins
  optionsSuccessStatus: 200,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));app.use(express.json());

app.use('/api/auth', authRoutes);

db.sequelize.sync().then(() => {
  app.listen(9987, () => {
    console.log('Server is running on port 5000');
  });
});
