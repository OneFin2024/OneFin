const fs = require('fs');
const sharp = require('sharp');
const Tesseract = require('tesseract.js');

async function preprocessAndOCR(imagePath) {
    try {
        // Read the image file
        const imageBuffer = fs.readFileSync(imagePath);

        // Resize and convert the image to grayscale
        const resizedImage = await sharp(imageBuffer)
            .resize({ width: 800 }) // Resize the image to a reasonable size
            .greyscale() // Convert the image to grayscale
            .toBuffer(); // Convert the image to a buffer

        // Perform OCR using Tesseract.js
        const result = await Tesseract.recognize(
            resizedImage,
            'eng', // Language
            { logger: m => console.log(m) } // Logger function for progress/status messages
        );

        // Extract and return text
        return result.data.text;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Propagate the error to the caller
    }
}

// Usage
const imagePath = './test.gif'; // Change this to the actual image path
preprocessAndOCR(imagePath)
    .then(text => {
        console.log('Extracted Text:', text);
        // Further processing if needed
    })
    .catch(error => {
        console.error('Error:', error);
    });