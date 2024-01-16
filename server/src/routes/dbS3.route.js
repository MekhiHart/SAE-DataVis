const express = require('express');
const router = express.Router();

const dbs3Controller = require("../controllers/dbS3.controllers")

// /api/getAllRaces
router
    .route("/getAllRaces")
    .get(async (req, res) => {
        console.log("req: ", req.body)
        const foldersArr = await dbs3Controller.GetRaceFolders()
        const S3ObjArr = foldersArr.map(folder => dbs3Controller.GetMetaData(folder))
        const metaDataArr = await Promise.all(S3ObjArr)
        res.json(metaDataArr)
    }) 

router
    .route("/getRaceFolderContents")
    .post(async (req, res) => {

        if ("bucket_key" in req.body){
            const bucketKey = req.body["bucket_key"] // error checking if property 'bucket_key' does not exist

            try{
                const data = await dbs3Controller.GetRaceFolderContents(bucketKey) // TODO error checking if using AWS API fails
                res.json(data)
            } catch(err){
                // TODO need to implement a better way to handle error
                res.json(false)
            } // catch

        } 
        
        else{
            console.log("called here")
            res.json(false)
        } // else

        
    }) 

router
    .route("/getGraphJSON")
    .post(async (req, res) => {
        const bucketKey = req.body["bucket_key"]
        const data = await dbs3Controller.GetGraphJSON(bucketKey)
        res.json(data)
    })

module.exports = router