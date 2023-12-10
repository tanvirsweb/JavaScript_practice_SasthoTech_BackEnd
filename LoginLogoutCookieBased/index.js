const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

// MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup_login',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Validation schema using Joi
const userSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  district: Joi.string().required(),
  password: Joi.string().required(),
});

// Hashing function for password
const hashPassword = async (password) => {
  const saltRounds = 10;
  //set complexity of hashing
  return bcrypt.hash(password, saltRounds);
};

// Routes
app.post('/signup', async (req, res) => {
  try {
    // Validate user input
    const { error, value } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Check if phone number is unique in the database
    const [existingUser] = await pool.query('SELECT * FROM users WHERE phone = ?', [value.phone]);
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Phone number already exists' });
    }

    // Hash the password
    const hashedPassword = await hashPassword(value.password);

    // Insert the new user into the database
    const [result] = await pool.query('INSERT INTO users SET ?', {
      name: value.name,
      phone: value.phone,
      district: value.district,
      password: hashedPassword,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    });

    return res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Find user by phone number
    const [user] = await pool.query('SELECT * FROM users WHERE phone = ?', [phone]);

    // Check if user exists
    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid phone number or password' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user[0].password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid phone number or password' });
    }

    // Set a cookie for authentication= string[1:end] , + sign in cookie can't be used->auto modified
    res.cookie('authToken', phone.slice(1), { httpOnly: true });
    return res.json({ message: 'Login successful', userId: user[0].id });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/logout', (req, res) => {
  // Clear the authentication cookie
  res.clearCookie('authToken');
  return res.json({ message: 'Logout successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
CREATE TABLE `signup_login`.`users`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `phone` INT NOT NULL,
    `district` VARCHAR(30) NOT NULL,
    `password` TEXT NOT NULL,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB;
ALTER TABLE `users` CHANGE `phone` `phone` TEXT NOT NULL;
*/