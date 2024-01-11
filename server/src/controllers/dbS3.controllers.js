
// import s3Client from "../config/dbS3.config"
const s3 = require("../config/dbS3.config")
const path = require('path');
const dotenv = require('dotenv')

// Construct the absolute path to the .env file
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

class DBS3Controller{
    constructor(){
        if (DBS3Controller._instance){
            throw new Error("DBS3Controller class can't be instantiated more than once")
        }
        DBS3Controller._instance = this
    }

    // called in Upload View
    CreateRaceFolder(){
        const bucketName = process.env.AWS_MAIN_BUCKET
        const key = "race_2/"

        const metadata = {
            'x-amz-meta-id': "12",
            'x-amz-meta-name': "Irving Race",
            'x-amz-meta-date': Date(),
            'x-amz-meta-time': "60",
            // Add more metadata key-value pairs as needed
        };

        const params ={
            Bucket: bucketName,
            Key: key,
            Metadata: metadata,
        }

        s3.putObject(params, (err, data) =>{
            if (err) {
                console.error('Error uploading to S3:', err);
            } else {
                console.log('File uploaded successfully to:', data.Location);
            }
        })
    } // createRaceFolder

    // Called in Home View
    async GetRaceLogs(){
        // TODO: Need to filter out folders from other objects
        const bucketName = process.env.AWS_MAIN_BUCKET
        const bucketParams = {
            Bucket : bucketName,
        };
        
        
        // Call S3 to obtain a list of the objects in the bucket
        const data = await s3.listObjectsV2(bucketParams).promise()
        const results = data.Contents
        return results
    } // listRaceLogs

    // called in Subsytem View
    GetRaceFolderContents(){
        // Specify the bucket name and the prefix (folder path) in S3
        const bucketName = process.env.AWS_MAIN_BUCKET;
        const prefix = 'race_2';

        // List the contents of the folder in S3
        const params = {
        Bucket: bucketName,
        Prefix: prefix,
        };

        s3.listObjectsV2(params, (err, data) => {
        if (err) {
            console.error('Error listing S3 contents:', err);
        } else {
            console.log('Contents of the folder in S3:', data.Contents);
        }
        });
    }

    // called in Graph View
    GetObject(){
        const bucketName = process.AWS_MAIN_BUCKET
        const key = "race_2/"

        const params ={
            Bucket: bucketName,
            Key: key,
        }

        s3.getObject(params, (err, data) =>{
            if (err) {
                console.error('Error uploading to S3:', err);
            } else {
                console.log("data retrieved: ", data.Metadata);
            }
        })
    } // GetObject

    // called in Graph View
    ParseObjectToJSON(data){
        dataBuffer = data.Body
        jsonObject = JSON.parse(dataBuffer.toString("utf-8"))
        console.log("json: ", jsonObject)
    } // ParseObjectToJSON

} // DBS3Controller

const dbs3Controller = new DBS3Controller()

module.exports = dbs3Controller