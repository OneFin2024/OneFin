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
        taxID: null,
        companyName: null,
        address: null,
        BusinessStarted: null,
        phoneNumber: null,
        email: null,
        website: null,
        licenseNumber: null,
        employerID: null,
        principalBusinessActivity: null,
        dateBusinessStarted: null,
        otherRelevantInfo: []
    };

    detections.forEach(detection => {
        const text = detection.description;

        // Tax ID extraction
        const taxIDMatch = text.match(/\b\d{2}-\d{7}\b|\b\d{9}\b/);
        if (taxIDMatch && !extractedData.taxID) {
            extractedData.taxID = taxIDMatch[0];
        }

        // Company Name extraction (including "Name of Partnership")
        const companyNameMatch = text.match(/(?:Name of Partnership|Name|Partnership name|Name of the entity):?\s*(.*)/i);
        if (companyNameMatch && !extractedData.companyName) {
            extractedData.companyName = companyNameMatch[1].trim();
        }

        // Address extraction (including "Number, street, and room or suite")
        const addressMatch = text.match(/(?:Address|Principal place of business|Street address):?\s*(.*)/i);
        if (addressMatch && !extractedData.address) {
            extractedData.address = addressMatch[1].trim();
        }

        // Date of Birth extraction (example pattern: 01/01/2000)
        const dobMatch = text.match(/\b\d{1,2}\/\d{1,2}\/\d{4}\b/);
        if (dobMatch && !extractedData.dateOfBirth) {
            extractedData.BusinessStarted = dobMatch[0];
        }

        // Phone number extraction (example pattern: (123) 456-7890)
        const phoneMatch = text.match(/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
        if (phoneMatch && !extractedData.phoneNumber) {
            extractedData.phoneNumber = phoneMatch[0];
        }

        // Email extraction (example pattern: email@example.com)
        const emailMatch = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
        if (emailMatch && !extractedData.email) {
            extractedData.email = emailMatch[0];
        }

        // Website extraction (example pattern: https://example.com)
        const websiteMatch = text.match(/\bhttps?:\/\/\S+\b/);
        if (websiteMatch && !extractedData.website) {
            extractedData.website = websiteMatch[0];
        }

        // License number extraction (example pattern: L12345)
        const licenseMatch = text.match(/\bL\d+\b/i);
        if (licenseMatch && !extractedData.licenseNumber) {
            extractedData.licenseNumber = licenseMatch[0];
        }

        // Employer ID extraction specifically labeled as "D Employer identification number"
        const einMatch = text.match(/\bD\s+Employer\s+identification\s+number\s+\d{2}-\d{7}\b|\bD\s+Employer\s+identification\s+number\s+\d{9}\b/i);
        if (einMatch && !extractedData.employerID) {
            extractedData.employerID = einMatch[0].replace(/\bD\s+Employer\s+identification\s+number\s+/i, ''); // Remove 'D Employer identification number ' prefix
        }

        // Principal Business Activity extraction specifically labeled as "Principal business activity"
        const principalBusinessActivityMatch = text.match(/\bPrincipal\s+business\s+activity:\s*(.*)/i);
        if (principalBusinessActivityMatch && !extractedData.principalBusinessActivity) {
            extractedData.principalBusinessActivity = principalBusinessActivityMatch[1].trim();
        }

        // Date Business Started extraction specifically labeled as "Date business started" or similar
        const dateBusinessStartedMatch = text.match(/\b(?:Date\s+business\s+started|Business\s+start\s+date):\s*(.*)/i);
        if (dateBusinessStartedMatch && !extractedData.dateBusinessStarted) {
            extractedData.dateBusinessStarted = dateBusinessStartedMatch[1].trim();
        }

        // Additional information extraction (ignoring known key names if not well formatted)
        const knownKeyNames = ['Name', 'Partnership name', 'Name of the entity', 'Address', 'Principal place of business', 'Street address', 'Principal business activity', 'Date business started', 'Business start date'];
        const keyNameRegex = new RegExp(`^(${knownKeyNames.join('|')})\\b`, 'i');

        if (!keyNameRegex.test(text)) {
            extractedData.otherRelevantInfo.push(text.trim());
        }
    });

    return extractedData;
}




const imagePath = './test8.PNG'; 
detectText(imagePath)
    .then(info => {
        console.log('Extracted Information:', JSON.stringify(info, null, 2));
    })
    .catch(error => {
        console.error('Error:', error);
    });
