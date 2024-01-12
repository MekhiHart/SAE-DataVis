const express = require('express');
const router = express.Router();

const dbs3Controller = require("../controllers/dbS3.controllers")

// /api/getAllRaces
router
    .route("/getAllRaces")
    .get(async (req, res) => {
        const foldersArr = await dbs3Controller.GetRaceFolders()
        const S3ObjArr = foldersArr.map(folder => dbs3Controller.GetMetaData(folder))
        const metaDataArr = await Promise.all(S3ObjArr)
        res.json(metaDataArr)
    })

router
    .route("/getRaceFolderContents")
    .post(async (req, res) => {
        const bucketKey = req.body["bucket_key"]
        const data = await dbs3Controller.GetRaceFolderContents(bucketKey)
        res.json(data)
        
    })

module.exports = router