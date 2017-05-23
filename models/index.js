const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//连接mongodb
var dbName = G.C.DBNAME
var uri = `mongodb://localhost/${dbName}`

console.log('mongoDB: connecting to', uri)

db = mongoose.createConnection(uri)

db.modelsList = {}

db.getModel = function(m) {
  if (db.modelsList[m]) {
    return db.modelsList[m]
  } else {
    let json = require(`./${m}`)
    let newSchema = new Schema(json)
    let newModel = db.model(`${m}`, mySchema)
    db.modelsList[m] = newModel

    return newModel
  }
}

module.exports = db.getModel
