const mongoose = require("mongoose")

const countConnetion = () =>{
    const numberConnections = mongoose.connections.length
    console.log(`Number of connections :: ${numberConnections}`);
}

module.exports = { countConnetion}