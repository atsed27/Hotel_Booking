import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import Authrouter from './routes/auth.js';
import HotelRouter from './routes/hotels.js';
import UserRouter from "./routes/user.js";
import RoomRouter from './routes/rooms.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express();

dotenv.config();
const connecter = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_DB_URL);
        console.log('connect to mongodb')
    } catch (error) {
        throw error
    }
}
mongoose.connection.on('disconnected',()=>{
    console.log('disconnected')
})
mongoose.connection.on('connection',()=>{
    console.log('connect')
})

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',Authrouter)
app.use('/api/hotels',HotelRouter);
app.use('/api/users',UserRouter);
app.use('/api/rooms',RoomRouter);


//error handler middle wire
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something Error";
    return(res.status(status).json({
        success:false,
        status,
        message,
    }))
});
app.listen(4090,()=>{
    connecter()
    console.log('port is run at 4090')
})