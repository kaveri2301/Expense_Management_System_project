const jwt = require('jsonwebtoken');
const userMstModel = require('../Model/UserMstModel')
const bcrypt = require('bcryptjs')

async function adUserMst(req, res) {

    try {
        const { userdeptname, deptId, userlocname, locId, employeename, empId, username, password, confirmpass, useractivestatus } = req.body

        if (password !== confirmpass) {
            return res.status(400).send({ msg: "Password and confirmPassword do not match" });
        }

        const salt = bcrypt.genSaltSync(12)
        const encpassword = bcrypt.hashSync(password, salt)

        const encconfirmPassword = bcrypt.hashSync(confirmpass, salt)

        const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
        

        const data = new userMstModel({
            userdeptname,
            deptId,
            userlocname,
            locId,
            employeename,
            empId,
            username,
            password: encpassword,
            confirmpass: encconfirmPassword,
            useractivestatus,
            token:token
        });

        const userMstData = await data.save();
        res.status(201).send({ msg: "User added successfully", userMstData });
    } catch (err) {
        // res.status(400).send({ err });
        console.log(err);
    }
}



// Userlogin

async function Userlogin(req, res) {
    const { username, password } = req.body;
  
    try {
      const user = await userMstModel.findOne({ username });
  
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



async function updateUserMst(req, res) {
    try {

        const { userdeptname, deptId, userlocname, locId, employeename, empId, username, useractivestatus } = req.body
        // console.log(req.body);

        const data = await userMstModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    userdeptname,
                    deptId,
                    userlocname,
                    locId,
                    employeename,
                    empId,
                    username,
                    useractivestatus
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


async function finUserMst(req, res) {
    try {
        const data = await userMstModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}

async function findParticularUser(req, res) {
    try {
        const data = await userMstModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This User doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

async function deleteUser(req, res) {
    try {
        const data = await userMstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "User deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { adUserMst, updateUserMst, finUserMst, findParticularUser, deleteUser,Userlogin }