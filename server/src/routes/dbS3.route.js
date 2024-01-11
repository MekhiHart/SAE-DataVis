const express = require('express');
const router = express.Router();

const dbs3Controller = require("../controllers/dbS3.controllers")

router
    .route("/getAllRaces")
    .get(async (req, res) => {
        const data = await dbs3Controller.GetRaceLogs()
        // console.log("data: ", data)

        res.json(data)
    })

module.exports = router