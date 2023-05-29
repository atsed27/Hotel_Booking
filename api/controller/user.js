import User from '../model/User.js';

export const UpdateUser = async(req,res,next)=>{
    try {
        const updateUser  = await User.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{new:true}
            );
        res.status(200).json({updateUser});
    } catch (error) {
        next(error);
    }
};

export const DeleteUser = async(req, res,next) =>{
    try {
        await User.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json('User has been deleted');
    } catch (error) {
        next(error);
    }
};

export const getUser = async(req, res, next) =>{
    try {
        const user  = await User.findById(req.params.id);
        res.status(200).json({user});
    } catch (error) {
        next(error)
    }
};

export const getallUser = async(req,res,next)=>{
    try {
        const user  = await User.find();
        res.status(200).json({user});
    } catch (error) {
       next(error);
    }
}
