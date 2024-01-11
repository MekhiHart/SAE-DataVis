// called in Upload View
function CreateRaceFolder(){
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
function GetRaceLogs(){
    // Create the parameters for calling listObjects
    const bucketName = process.env.AWS_MAIN_BUCKET
    const bucketParams = {
        Bucket : bucketName,
    };
    
    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects(bucketParams, function(err, data) {
        if (err) {
        console.log("Error", err);
        } else {
        console.log("Success", data);
        }
    });
} // listRaceLogs

// called in Subsytem View
function GetRaceFolderContents(){
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
function GetObject(){
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
function ParseObjectToJSON(data){
    dataBuffer = data.Body
    jsonObject = JSON.parse(dataBuffer.toString("utf-8"))
    console.log("json: ", jsonObject)
} // ParseObjectToJSON