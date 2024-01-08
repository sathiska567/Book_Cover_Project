const adminModel = require('../model/adminModel.js');
const bcrypt = require('bcrypt');


const registerController = async (req, res) => {
        try {
            const { email, password } = req.body;
    
            console.log(email,password);
    
            // Check if the user is already registered
            const existingUser = await adminModel.findOne({ email });
    
            if (existingUser) {
                return res.status(409).send({
                    success: false,
                    message: "User Already Registered"
                });
            }
    
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            // Save hashed password to req.body instead of req.body,password
            req.body.password = hashedPassword;
    
            // Save data inside the database
            const user = new adminModel(req.body);
            await user.save();

            console.log(user);
    
            res.status(200).send({
                success: true,
                message: "User Registered Successfully",
                user
            });
    
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "User registration encountered an error",
                error
            });
        }
    };
    


module.exports = {registerController};