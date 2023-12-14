const { z } = require('zod');

// Zod schema for user data
const userSchema = z.object({
    name: z.string().min(3).max(255),
    phone: z.string().regex(/^\+\d{13}$/), // Assumes a phone format like "+8801773787127"
    district: z.string(),
    password: z.string().min(6), // Assuming a minimum password length of 6 characters
});

// Example of validating user input using Zod
const validateUserInput = (data) => {
    try {
        // Validate the input data against the defined schema
        const validatedData = userSchema.parse(data);
        return validatedData;

    } catch (error) {
        // ZodError will be thrown if validation fails
        console.error('Validation error:', error.errors);
        throw error;
    }
};

// Example usage
const userInput = {
    name: 'Tanvir Anjom Siddique',
    phone: '+8801715619397',
    district: 'Tangail',
    password: 'asdfasdf',
};

try {
    const validatedUserInput = validateUserInput(userInput);
    console.log('Validated User Input:', validatedUserInput);
    console.log(`Name: ${validatedUserInput.name}\n`);

} catch (error) {
    console.log('Validation failed. Please check the input.');
}

// --------------------------------------------------------------
// Zod schema for different data types
const dataSchema = z.object({
    stringValue: z.string(),
    intValue: z.number().int(),
    dateValue: z.date(),
    floatValue: z.number(),
  });
  
// Example data
const inputData = {
    stringValue: 'Hello, Zod!',
    intValue: 42,
    dateValue: new Date(),
    floatValue: 3.14,
};
  
  // Validate using Zod
try {
    const validatedData = dataSchema.parse(inputData);
    console.log('Validated Data:', validatedData);
} catch (error) {
    console.error('Zod Validation Error:', error.errors);
}