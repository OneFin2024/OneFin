const db = require('../Models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { fullName, email, phone, password } = req.body;
    console.log(req.body);
  if (!fullName || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await db.User.create({ fullName, email, phone, password });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error', error });
    console.log(error);
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token, user });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }


  
}
exports.getalluser = async (req, res)=>{
  try {
    const applicantInformation = await db.ApplicantInformation.findAll({});
    res.json(applicantInformation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };
