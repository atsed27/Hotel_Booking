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



//update  

router.put('/:id',verifyUser,UpdateUser);


//Delete   
router.delete('/:id',verifyUser,DeleteUser); 

//Get 

router.get('/:id',verifyUser,getUser);

//Get all

router.get('/',verifyAdmin,getallUser);

export default router;