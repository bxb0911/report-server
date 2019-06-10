const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ReportSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String
    },
    timestamp: {
        type: Date
    }
}, {collection: 'Report', versionKey: false})

module.exports = mongoose.model('Report', ReportSchema)