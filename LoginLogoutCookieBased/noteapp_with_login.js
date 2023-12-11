const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const mysql = require('mysql2/promise');
const { getMaxListeners } = require('../mysql2_nodejs_express_crudapp/db');

const jwt = require('jsonwebtoken');
const JWT_KEY = 'yourSecretKey';

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
// Signup login logout
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

    const id = parseInt( user[0].id );
    // Sign the JWT with the user ID and a secret key
    const token = jwt.sign({ id }, JWT_KEY);

    // Set the JWT as an HTTP-only cookie
    res.cookie('authToken', token, { httpOnly: true });

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


//Note app

// Joi validation schema for note
const noteSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});
// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
    const token = req.cookies.authToken;
    console.log('auth token:',token)

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
  
    try {
        const decoded = jwt.verify(token, JWT_KEY);
        const userId = decoded.id;
        req.userId = userId;

        console.log('decoded authtoken:',decoded)

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
  };

// Create note route (protected by authentication middleware)
app.post('/notes', authenticateUser, async (req, res) => {
    try {
        const { error, value } = noteSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const [result1] = await pool.query('SELECT MAX(id) AS maxId FROM notes');
            // .catch(err=> console.log(err));
        let nextid = result1[0].maxId==null? 1: ( parseInt(result1[0].maxId) +1);//if no user default 1

        const [result] = await pool.query('INSERT INTO notes SET ?', {
            id: nextid,
            title: value.title,
            description: value.description,        
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            userId: req.userId, // Attach the user ID from the authenticated user
        });
    
        return res.status(201).json({ message: 'Note created successfully', Id: nextid, userId: req.userId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get user-specific notes route (protected by authentication middleware)
  app.get('/notes', authenticateUser, async (req, res) => {
    try {
        const [userNotes] = await pool.query("SELECT* FROM notes WHERE userId = ?",[req.userId])
        .catch(err=> console.log(err)) 

        return res.json(userNotes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
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


CREATE TABLE `signup_login`.`notes`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` TEXT NULL DEFAULT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `userId` INT NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB;
*/