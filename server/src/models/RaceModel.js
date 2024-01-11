class RaceModel{
    constructor(metaDataObj){
        this.id = metaDataObj["x-amz-meta-id"]
        this.name = metaDataObj["x-amz-meta-name"]
        this.date = metaDataObj["x-amz-meta-date"]
        this.duration = metaDataObj["x-amz-meta-time"] // TODO Change key from x-amz-meta-time to a-amz-meta-duration
    }
}

module.exports = RaceModel