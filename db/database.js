const { MongoClient } = require('mongodb')

//require('dotenv').config()

//const url = process.env.url

class Connection {
    static async open() {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(url);
        console.log(`DB connected...`);
        return this.conn;
    }
}

Connection.conn = null;
//Connection.url = url;

module.exports = { Connection };