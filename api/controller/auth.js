import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async(req,res,next)=>{

    try {
        //var bcrypt = require('bcryptjs');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body,password:hash});
         await newUser.save();
        res.status(200).send('user successfully registered')
    } catch (error) {
        next(error);
    }
};

export const Login = async(req,res,next)=>{

    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).send('user not found');
        }
        const isPasswordCorrect = bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect){
            return res.status(404).send('email or password is incorrect');
        }
        const {password,isAdmin,...otherDetails} = user._doc;
        const token = jwt.sign({ id:user._id,isAdmin:user.isAdmin},process.env.JWT)
        res.cookie("access_token",token,{
            httpOnly: true
        }).status(200).json({...otherDetails})
        //console.log(token);
    } catch (error) {
        next(error);
    }
};