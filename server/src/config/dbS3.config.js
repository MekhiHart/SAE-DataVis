require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const dotenv = require('dotenv');

const path = require('path');

// Construct the absolute path to the .env file
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });




// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

// Set the config
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Create S3 service object
const s3Client = new AWS.S3({apiVersion: process.env.AWS_API_VERSION});

module.exports = s3Client