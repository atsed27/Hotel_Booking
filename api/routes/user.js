import express from 'express';
import { DeleteUser, UpdateUser, getUser, getallUser } from '../controller/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  //res.send("hello user, you are logged in")
//})

//router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
 // res.send("hello user, you can be deleted")
//})

//router.get("/checkAdmin/:id", verifyAdmin, (req,res,next)=>{
  //res.send("hello admin, you can be deleted all acount,add")
//})



//update the Hotel 

router.put('/:id',UpdateUser);


//Delete Hotel items  
router.delete('/:id',DeleteUser); 

//get hotels

router.get('/:id',getUser);

//get all hotels

router.get('/',getallUser);

export default router;