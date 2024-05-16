
const locationmstModel = require('../Model/LocationMstModel')

async function addLocation(req, res) {

    try {
        const { locationname,city, address, locactivestatus } = req.body

        const data = new locationmstModel({
            locationname,
            city,
            address,
            locactivestatus
        });

        const locationMstData = await data.save();
        res.status(201).send({ msg: "Location added successfully", locationMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

async function updateLocationMst(req, res) {
    try {
        const { locationname,city, address, locactivestatus } = req.body  

        const data = await locationmstModel.updateOne(
            { _id: req.params._id }, 
            { $set: { locationname,city, address, locactivestatus } } 
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (error) {
        res.status(500).send({ error })
    }
}


async function findLocationMst(req, res) {
    try {
        const data = await locationmstModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}


async function findParticularLocation(req, res) {
    try {
        const data = await locationmstModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Location doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

async function deleteLocation(req, res) {
    try {
        const data = await locationmstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Location deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}



module.exports = { addLocation , updateLocationMst , findLocationMst,findParticularLocation,deleteLocation}