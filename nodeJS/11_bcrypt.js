const bcrypt = require('bcrypt');

// Example function to hash a password
const hashPassword = async (plainPassword) => {
  try {
        const saltRounds = 10; // The cost factor for the bcrypt algorithm
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
  } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
  }
};

// Example function to check a password against its hash
const checkPassword = async (plainPassword, hashedPassword) => {
  try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
  } catch (error) {
        console.error('Error checking password:', error);
    throw error;
  }
};

// Example usage
const validatePassword = async ()=>{
    
    const plainPassword = 'user123'; // Replace with the actual password
    const hashedPassword = await hashPassword(plainPassword);

    console.log('Hashed Password:', hashedPassword);

    // Simulate checking a password against its hash
    const isPasswordMatch = await checkPassword('user123', hashedPassword);

    if (isPasswordMatch) {
        console.log('Password is correct');
    } else {
        console.log('Password is incorrect');
    }
}
validatePassword();
