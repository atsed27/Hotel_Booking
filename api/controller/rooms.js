import Room from "../model/Room.js";
import Hotel from "../model/Hotel.js";

export const createRoom = async(req,res,next)=>{
    const HotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const saveRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(HotelId, {
                $push:{rooms:saveRoom._id}
            })
        } catch (error) {
            next(error);
        }
        res.status(200).json({saveRoom})
    } catch (error) {
        next(error);
    }
}
export const UpdateRoom = async(req,res,next)=>{
    try {
        const updateRoom  = await Room.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{new:true}
            );
        res.status(200).json({updateRoom});
    } catch (error) {
        next(error);
    }
};

export const DeleteRoom = async(req, res,next) =>{
    try {
        await Room.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json('hotel has been deleted');
    } catch (error) {
        next(error);
    }
};

export const getRoom = async(req, res, next) =>{
    try {
        const rooms  = await Room.findById(req.params.id);
        res.status(200).json({rooms});
    } catch (error) {
        next(error)
    }
};

export const getallRoom = async(req,res,next)=>{
    try {
        const rooms  = await Room.find();
        res.status(200).json({rooms});
    } catch (error) {
       next(error);
    }
}