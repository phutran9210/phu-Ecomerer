const mongoose = require('mongoose');
const {countConnetion} = require("../src/v1/helpers/checkConections")

const MONGODB_URI = process.env.MONGODB_URL;

class Database {
    constructor(){
        this.connect()
    }

    connect(){
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
          .then(() => {
            console.log('Connected to MongoDB');
            countConnetion()
          })
          .catch(error => {
            console.error('Error connecting to MongoDB:', error);
          })
    }
    
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }

}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb