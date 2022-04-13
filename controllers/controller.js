const { ObjectId } = require('mongodb');
const { Connection } = require('../db/database');


class Handle {
    async get(req, res) {
        try {
            const collection = await Connection.client.db('TEST').collection('Employee_DATA')
            const data = await collection.find({}).toArray()
            return res.json({
                success: true,
                msg: `data fetched succesfully`,
                data
            })

        } catch (error) {
            console.log(error);
            return res.json({
                success: false,
                msg: `something went wrong`
            })
        }

    }
    async post(req, res) {
        try {
            const collection = await Connection.client.db('TEST').collection('Employee_DATA')
            if (Object.keys(req.body).length <= 0) return res.json({ msg: `No data recieved to insert` })
            const data = await collection.insertMany(req.body, { ordered: true })
            return res.json({
                success: true,
                msg: `inserted ${data.insertedCount} successfully`
            })

        } catch (error) {
            console.log(error);
            return res.json({
                success: false,
                msg: `something went wrong`
            })
        }

    }
    async single(req, res) {
        try {
            const collection = await Connection.client.db('TEST').collection('Employee_DATA')
            const data = await collection.findOne({ _id: ObjectId(req.params.id) })
            if (data === null) return res.json({ success: true, msg: `No doc found with id ${req.params.id}...` })
            return res.json({ success: true, msg: `Data Found`, data })
        } catch (error) {
            console.log(error);
            return res.json({
                success: false,
                msg: `something went wrong`
            })
        }

    }
    async update(req, res) {
        try {
            const collection = await Connection.client.db('TEST').collection('Employee_DATA')
            const data = await collection.updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body })
            if (data.matchedCount === 0) return res.json({ success: true, msg: `No doc found with id ${req.params.id}` })
            return res.json({ success: true, msg: `Updated data successfully`, data })
        } catch (error) {
            console.log(error);
            return res.json({
                success: false,
                msg: `something went wrong`
            })
        }

    }
    async delete(req, res) {
        try {
            const collection = await Connection.client.db('TEST').collection('Employee_DATA')
            const data = await collection.deleteOne({ _id: ObjectId(req.params.id) })
            if (data.deletedCount === 0) return res.json({ success: true, msg: `Doc with id ${req.params.id} not found` })
            return res.json({ success: true, msg: `doc deleted successfully` })
        } catch (error) {
            console.log(error);
            return res.json({
                success: false,
                msg: `something went wrong`
            })
        }

    }


}

module.exports = new Handle();