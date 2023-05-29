import express from 'express';
import Hotel from '../model/Hotel.js';
import { DeleteHotel, UpdateHotel, createHotel, getHotel, getallHotel } from '../controller/hotels.js';
const router =express.Router();

//create hotels
router.post('/',createHotel);

//update the Hotel 

router.put('/:id',UpdateHotel);

//Delete Hotel items  
router.delete('/:id',DeleteHotel); 

//get hotels

router.get('/:id',getHotel);

//get all hotels

router.get('/',getallHotel);

export default router;