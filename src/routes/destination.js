const router = require("express").Router();
const destination = require('../model/destination');

router.get('/' ,async (req,res)=>{
    try{
        const savedDestination = await destination.find();
        res.status(200).json(savedDestination);
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

router.post('/' ,async (req,res)=>{

    const dest = new destination(req.body);
    try{
        const savedDestination = await dest.save();
        res.status(200).json(savedDestination);
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
}
);

module.exports = router;