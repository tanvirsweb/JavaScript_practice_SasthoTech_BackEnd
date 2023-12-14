const jwt = require('jsonwebtoken');

// Create a JWT token with a payload of 'alvi' and expiration time of 12 hours
const createToken = () => {
	const secretKey = process.env.JWT_SECRET || 'yourSecretKey';
	const payload = { Author_Name: 'alvi' };
	const expirationTime = '12h';

	const token = jwt.sign(payload, secretKey, { expiresIn: expirationTime });
	// app.get(url, (req, res)=>{ res.cookie('authToken', token, { httpOnly: true }); } )
	return token;
};

// Decode and verify the JWT token
const decodeToken = (token) => {
	try {
		// app.get(url, (req, res)=>{ const token = req.cookies.authToken; } )
		const secretKey = process.env.JWT_SECRET || 'yourSecretKey'; // Replace with the same secret key used for signing
		const decoded = jwt.verify(token, secretKey);
		return decoded;
		
	} catch (error) {
		return null; // Token verification failed
	}
};

// Example usage
const token = createToken();
console.log('JWT Token:', token);

const decodedToken = decodeToken(token);
console.log('Decoded Token:', decodedToken);
