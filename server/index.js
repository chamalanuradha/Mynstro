import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import conectDB from './config/conectDB.js';
import cookieParser from "cookie-parser";
import userRouter from './route/user.route.js';
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy: true, 
}))

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/user', userRouter);

conectDB().then(() => {
    const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
}).catch((err) => { console.log(err.message)
})






