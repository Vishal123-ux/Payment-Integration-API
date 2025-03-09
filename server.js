import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import payment from './routes/productRoutes.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 0;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use("/api/v1", payment);

app.get('/', (req, res)=>{
    res.send('hello bitch');
})

export const instance = new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET,
})


app.listen(PORT, ()=>{
    console.log('Server is running...' , PORT);
});
