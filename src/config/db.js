const dns = require("node:dns");
const mongoose = require("mongoose");

async function connectToDB() {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("MONGO_URI is missing. Add it to your .env file.");
    }

    const dnsServers = process.env.MONGODB_DNS_SERVERS
    if (dnsServers) {
        dns.setServers(dnsServers.split(",").map(server => server.trim()).filter(Boolean));
    }

    try {
        await mongoose.connect(mongoUri)
        console.log("server is connected to db")
    } catch (error) {
        console.error("error connecting to db:", error.message)
        process.exit(1)
    }
}

module.exports = connectToDB

//MONGO_URI=mongodb+srv://myUser:myPassword@cluster0.abcde.mongodb.net/demo-payment?retryWrites=true&w=majority
//MONGO_URI=mongodb+srv://:myPassword@cluster0.abcde.mongodb.net/demo-payment?retryWrites=true&w=majority