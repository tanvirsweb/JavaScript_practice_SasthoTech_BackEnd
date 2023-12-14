const Joi = require('joi');

// Joi schema for user data
const userJoiSchema = Joi.object({
    name: Joi.string().min(3).max(255),
    phone: Joi.string().regex(/^\+\d{13}$/),
    district: Joi.string(),
    password: Joi.string().min(6),
});

// Example usage
const userInput = {
    name: 'Tanvir Anjom Siddique',
    phone: '+8801715619397',
    district: 'Tangail',
    password: 'asdfasdf',
};

// Validate using Joi
const { error, value } = userJoiSchema.validate(userInput);
if (error) {
    console.error('Joi Validation Error:', error.message);
} else {
    console.log('Validated User Input (Joi):', value);
}
