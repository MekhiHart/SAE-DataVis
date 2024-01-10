require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const dotenv = require("dotenv")
dotenv.config()



// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region 
AWS.config.update({region: process.env.AWS_DEFAULT_REGION});

// Create S3 service object
s3_Client = new AWS.S3({apiVersion: process.env.AWS_API_VERSION});
