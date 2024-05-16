const jwt = require('jsonwebtoken');
const locHeadMstModel = require('../Model/LocationHeadMstModel')
const bcrypt = require('bcryptjs')

async function addLocationHeadMst(req, res) {

    try {
        const { locationname,locId, deptname,deptId, employeename,empId, username, password, confirmpass, locheadactivestatus } = req.body

        if (password !== confirmpass) {
            return res.status(400).send({ msg: "Password and confirmPassword do not match" });
        }

        const salt = bcrypt.genSaltSync(12)
        const encpassword = bcrypt.hashSync(password, salt)

        const encconfirmPassword = bcrypt.hashSync(confirmpass, salt)
        const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });

        const data = new locHeadMstModel({
            locationname,
            locId,
            deptname,
            deptId,
            employeename,
            empId,
            username,
            password: encpassword,
            confirmpass: encconfirmPassword,
            locheadactivestatus,
            token:token
        });

        const locHeadMstData = await data.save();
        res.status(201).send({ msg: "Location Head added successfully", locHeadMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

// location login 

async function Locationlogin(req, res) {
    const { username, password ,locationname} = req.body;
  
    try {
      const user = await locHeadMstModel.findOne({ username });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Create a token
      const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
      
      // Redirect to dashboard after successful login
    //   history.push('/dashboard');
      //   res.redirect(`/userdashboard?token=${token}`);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }







async function updateLocationHeadMst(req, res) {
    try {

        const { locationname,locId, deptname,deptId, employeename,empId, username, locheadactivestatus } = req.body

        const data = await locHeadMstModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    locationname,
                    locId,
                    deptname,
                    deptId,
                    employeename,
                    empId,
                    username,
                    locheadactivestatus
                }
            }
        )

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (err) {
        // console.error(err);
        res.status(500).send({ err });
    }
}


async function findLocationHeadMst(req, res) {
    try {
        const data = await locHeadMstModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}

async function findParticularLocationHead(req, res) {
    try {
        const data = await locHeadMstModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Location Head doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

async function deleteLocationHead(req, res) {
    try {
        const data = await locHeadMstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Location Head deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addLocationHeadMst, updateLocationHeadMst , findLocationHeadMst , findParticularLocationHead , deleteLocationHead,Locationlogin }