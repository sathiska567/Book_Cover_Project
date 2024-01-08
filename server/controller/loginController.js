const adminModel = require('../model/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Email and password are required"
            });
        }

        const admin = await adminModel.findOne({ email });

        if (!admin) {
            return res.status(400).send({
                success: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        return res.status(200).send({
            success: true,
            message: "Login Success",
            token
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Please Enter Correct Credentials",
            error
        });
    }
};

module.exports = { loginController };
