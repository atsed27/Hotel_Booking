import express from 'express';
import { DeleteRoom, UpdateRoom, createRoom, getRoom, getallRoom } from '../controller/rooms.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

//create Room
router.post('/:hotelId',verifyAdmin,createRoom);

//update the Hotel 

router.put('/:id',verifyAdmin, UpdateRoom);

//Delete Hotel items  
router.delete('/:id',verifyAdmin,DeleteRoom); 

//get hotels

router.get('/:id',getRoom);

//get all hotels

router.get('/',getallRoom);

export default router;