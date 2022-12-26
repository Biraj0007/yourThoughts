const express = require('express')
const fetchuser = require('../middleware/fetchuser')
const User = require('../models/User')
const Note = require('../models/Note')
const router = express.Router()

router.post('/',  async (req, res) => {

    try {
        // userId = req.user.id;
        // const user = await User.findById(userId).select("-password")
        const all = await User.find().select("-password")
        // const all1 = { ...all }
        // const notes = await Note.find({ user: req.user.id });
        let obj_1 = []
        for(i=0;i<all.length;i+=1){
            ids = all[i]['_id']
            // console.log(ids);
            const notes = await Note.find({ user: ids })
            const notes_1=notes.length
            if(notes_1==0){
                obj_1.push({name:all[i]['name'],email:all[i]['email'],notes:{title:"This user has no notes yet",description:''}})
            }
            else{
                // console.log(...notes['title']);
                obj_1.push({name:all[i]['name'],email:all[i]['email'],notes})
            }
            // console.log(all[i]['name'], notes);
            // obj_1.push({name:all[i]['name'],notes:{notes_1.length==0?"":notes}})
            // console.log(notes_1);

        }
        console.log(obj_1);
        
        res.json(obj_1)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error:error});
    }
}) 
module.exports = router