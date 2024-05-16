const personModel = require('../../Model/Adminmodel/Adminmodel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


async function addperson(req, res) {
    try {
        const{firstName,lastName,email,password,confirmPassword}=req.body
         
        if (password !== confirmPassword) {
            return res.status(400).send({ msg: "Password and confirmPassword do not match" });
        }

        const salt = bcrypt.genSaltSync(12)

        const encpassword = bcrypt.hashSync(password, salt)
        const encconfirmPassword = bcrypt.hashSync( confirmPassword, salt)

          // Generate JWT token
          const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' });
        
        const data = new personModel({
            firstName,
            lastName,
            email,
            password:encpassword,
            confirmPassword:encconfirmPassword,
            token: token  // Store the token in the database
            

        })
        const createData = await data.save()
        res.status(201).send({ msg: "person added successfully", createData })
    } catch (err) {
        res.status(400).send({ err })
    }
}

const findPerson = async (req, res) => {
    try {
        const personData = await personModel.find()
        res.status(200).send({ personData })
    } catch (err) {
        res.status(500).send(err)
    }
}
// async function login(req, res) {
//     try {

//         const { email, password } = req.body

//         const data = await personModel.findOne({ email })

//         const compare = await bcrypt.compare(password, data.password)

//         if (compare === true) {
//             // Generate JWT token
//             const token = jwt.sign({ email: data.email }, 'your-secret-key', { expiresIn: '1h' });

//             res.status(200).send({ token, data });
//         } else {
//             res.status(400).send({ msg: "Email or password incorrect" });
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// }
// const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).send({ msg: 'Access denied. No token provided.' });
//     }

//     jwt.verify(token, 'your-secret-key', (err, decoded) => {
//         if (err) {
//             return res.status(403).send({ msg: 'Invalid token.' });
//         }

//         req.user = decoded;
//         next();
//     });
// };



// async function updateUser(req,res){
//     try{
//      // Verify token before updating user
//         verifyToken(req, res);

//         const{email}=req.params
//         const{firstName,lastName}=req.body

//         const data=await personModel.updateOne(
//             {email},{$set:{firstName,lastName}}
//         )
//         if(data.modifiedCount>0){
//             res.status(200).send({msg:"User updated successfully"})
//         }else{
//             res.status(400).send({msg:"You haven't updated any data"})
//         }
//     } catch(error){
//         res.status(500).send(err)
//     }
// }

// const logout = (req, res) => {
//     try {
//         const token = req.header('Authorization');

//         if (!token) {
//             return res.status(401).send({ msg: 'Access denied. No token provided.' });
//         }

//         jwt.verify(token, 'your-secret-key', (err, decoded) => {
//             if (err) {
//                 return res.status(403).send({ msg: 'Invalid token.' });
//             }

//             // Token is valid, user is logged out
//             res.status(200).send({ msg: 'User logged out successfully.' });
//         });
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

async function login(req, res) {
    const { email, password } = req.body;
  
    try {
      const user = await personModel.findOne({ email });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      } 
  
      // Create a token
      const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  // function logout(req, res) {
  //   // Clear any token logic if needed
  //   res.status(200).json({ message: 'Logout successful' });
  // }


  async function logout(req, res) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'your-secret-key');

        // Optionally, perform additional checks based on the decoded token, if needed
        
        // Respond with a success message
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        // Handle specific errors
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        
        // Handle other errors
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}





module.exports = {addperson,findPerson,login,logout}


