const router=require("express").Router();
const fs=require("fs");

//http://localhost:3001/api/notes/
router.get("/", (req,res)=>{

    fs.readFile("./db/db.json","utf-8", (err,data)=>{
        if(err){
           res.status(500).json(err)
        }

        const notes=JSON.parse(data)
       
        res.json(notes)

    })
})

//Post request reference week 11 mini project in routes->tips.js
tips.post('/', (req, res) => {
    console.log(req.body);
  
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuidv4(),
      };
  
      readAndAppend(newTip, './db/tips.json');
      res.json(`Tip added successfully`);
    } else {
      res.error('Error in adding tip');
    }
  });
  
module.exports=router;