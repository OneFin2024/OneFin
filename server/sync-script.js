// sync-script.js

const db = require('./Models'); // adjust the path to your models directory if needed

db.sequelize.sync()
  .then(() => console.log('Database & tables created!'))
  .catch(error => console.error('Error creating database & tables', error));