import Hotel from '../model/Hotel.js';
export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json({saveHotel});
        
    } catch (error) {
        next(error)
    }
}

export const UpdateHotel = async(req,res,next)=>{
    try {
        const updateHotel  = await Hotel.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{new:true}
            );
        res.status(200).json({updateHotel});
    } catch (error) {
        next(error);
    }
};

export const DeleteHotel = async(req, res,next) =>{
    try {
        await Hotel.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json('hotel has been deleted');
    } catch (error) {
        next(error);
    }
};

export const getHotel = async(req, res, next) =>{
    try {
        const hotels  = await Hotel.findById(req.params.id);
        res.status(200).json({hotels});
    } catch (error) {
        next(error)
    }
};

export const getallHotel = async(req,res,next)=>{
    try {
        const hotels  = await Hotel.find();
        res.status(200).json({hotels});
    } catch (error) {
       next(error);
    }
}
