
const citymstModel = require('../Model/CityMstModel')


async function addCities(req, res) {

    try {
        const { cityname } = req.body

        const data = new citymstModel({
            cityname
        });

        const cityMstData = await data.save();
        res.status(201).send({ msg: "City added successfully", cityMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}


async function findCities(req, res) {
    try {
        const data = await citymstModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}


async function findParticularCity(req, res) {
    try {
        const data = await citymstModel.findOne({_id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This city doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function updateCity(req, res) {
    try {
        const {  cityname  } = req.body

        const data = await citymstModel.updateOne(
            {_id: req.params._id},
            { $set: 
                { 
                    cityname 
                } 
            }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (err) {
        res.status(500).send({ err })
    }
}

async function deleteCity(req, res) {
    try {
        const data = await citymstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "City deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addCities , updateCity , findCities , findParticularCity , deleteCity}