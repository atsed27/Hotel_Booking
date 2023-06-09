import express from 'express';
import Hotel from '../model/Hotel.js';
import { DeleteHotel, UpdateHotel, createHotel, getHotel, getallHotel } from '../controller/hotels.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router =express.Router();

//create hotels
router.post('/',verifyAdmin,createHotel);

//update the Hotel 

router.put('/:id',verifyAdmin, UpdateHotel);

//Delete Hotel items  
router.delete('/:id',verifyAdmin,DeleteHotel); 

//get hotels

router.get('/:id',getHotel);

//get all hotels

router.get('/',getallHotel);

export default router;