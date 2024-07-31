const vision = require('@google-cloud/vision');
const fs = require('fs');

// Initialize the Google Cloud Vision client with explicit credentials
const client = new vision.ImageAnnotatorClient({
    keyFilename: '/Users/yeesou/Downloads/onefin-426213-c04cf919dcd6.json'
});

async function detectText(imagePath) {
  // Read the image file
  const imageBuffer = fs.readFileSync(imagePath);

  // Perform text detection
  const [result] = await client.textDetection({ image: { content: imageBuffer } });
  const detections = result.textAnnotations;

  // Process the text detections to extract relevant fields
  const extractedData = processDetections(detections);

  return extractedData;
}

function processDetections(detections) {
  const extractedData = {
    taxID: '',
    companyName: '',
    address: '',
    BusinessStarted: '',
    phoneNumber: '',
    email: '',
    website: '',
    licenseNumber: '',
    employerID: '',
    principalBusinessActivity: '',
    dateBusinessStarted: ''
  };

  detections.forEach(detection => {
    const text = detection.description;

    // Tax ID extraction
    const taxIDMatch = text.match(/\b\d{2}-\d{7}\b|\b\d{9}\b/);
    if (taxIDMatch && !extractedData.taxID) {
      extractedData.taxID = taxIDMatch[0];
    }

    // Company Name extraction
    const companyNameMatch = text.match(/Name of Partnership:?\s*(.*)/i);
    if (companyNameMatch && !extractedData.companyName) {
      extractedData.companyName = companyNameMatch[1].trim();
    }

    // Address extraction
    const addressMatch = text.match(/Number, street, and room or suite no.:?\s*(.*)/i);
    if (addressMatch && !extractedData.address) {
      extractedData.address = addressMatch[1].trim();
    }

    // Date Business Started extraction
    const dateBusinessStartedMatch = text.match(/Date business started:?\s*(.*)/i);
    if (dateBusinessStartedMatch && !extractedData.dateBusinessStarted) {
      extractedData.dateBusinessStarted = dateBusinessStartedMatch[1].trim();
    }

    // Employer ID extraction
    const einMatch = text.match(/D Employer identification number\s*(\d{2}-\d{7}|\d{9})/i);
    if (einMatch && !extractedData.employerID) {
      extractedData.employerID = einMatch[1].trim();
    }

    // Principal Business Activity extraction
    const principalBusinessActivityMatch = text.match(/Principal business activity:?\s*(.*)/i);
    if (principalBusinessActivityMatch && !extractedData.principalBusinessActivity) {
      extractedData.principalBusinessActivity = principalBusinessActivityMatch[1].trim();
    }

    // Phone Number extraction (if applicable)
    const phoneNumberMatch = text.match(/Phone number:?\s*(\(\d{3}\)\s*\d{3}-\d{4}|\d{10})/i);
    if (phoneNumberMatch && !extractedData.phoneNumber) {
      extractedData.phoneNumber = phoneNumberMatch[1].trim();
    }

    // Email extraction (if applicable)
    const emailMatch = text.match(/Email:?\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
    if (emailMatch && !extractedData.email) {
      extractedData.email = emailMatch[1].trim();
    }

    // Website extraction (if applicable)
    const websiteMatch = text.match(/Website:?\s*(https?:\/\/[^\s]+)/i);
    if (websiteMatch && !extractedData.website) {
      extractedData.website = websiteMatch[1].trim();
    }

    // License Number extraction (if applicable)
    const licenseNumberMatch = text.match(/License number:?\s*(\w+)/i);
    if (licenseNumberMatch && !extractedData.licenseNumber) {
      extractedData.licenseNumber = licenseNumberMatch[1].trim();
    }
  });

  return extractedData;
}

module.exports = { detectText };
