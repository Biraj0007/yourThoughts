const express = require('express');
const User = require('../models/User')
const Note = require('../models/Note')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = 'NotABigDeal';

router.post('/createuser', [
    body('name', 'Name must be of 3 characters').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Minimum 8 characters are required').isLength({ min: 8 })],
    async (req, res) => {
        let success = false
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log("part1");

        try {
            let user1 = await User.findOne({ email: req.body.email })
            // console.log("part 2");
            if (user1) {
                return res.status(403).json({ error: "this email already exists" })
            }
            const salt = await bcrypt.genSalt(10);
            secPass = await bcrypt.hash(req.body.password, salt)

            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            })
            
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)
            success = true
            res.json({success, authtoken })
            console.log(authtoken);
        } catch (err) {
            console.log(err);
            res.status(405).send('Some error occured')
        }
    })

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({errors:errors.array})
    }
    const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                success = false
                return res.status(402).json({ error: "Please try to login with correct credentials" });
            }

            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                success = false
                return res.status(403).json({ success,error: "Please try to login with correct credentials" });
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({success, authtoken })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    
})
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
    //   const all = await User.find().select("-password")
    //   const all1 = {...all}
    //   console.log(all1);
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }) 
module.exports = router 