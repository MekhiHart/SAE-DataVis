const express = require('express');
const router = express.Router();

const dbs3Controller = require("../controllers/dbS3.controllers")

router
    .route("/getAllRaces")
    .get(async (req, res) => {
        const foldersArr = await dbs3Controller.GetRaceFolders()
        // console.log("folders: ", folders )
        // console.log("test: ", test)
        const metadataArr = foldersArr.map(folder => dbs3Controller.GetMetaData(folder))
        const data = await Promise.all(metadataArr)
        res.json(data)
    })

module.exports = router