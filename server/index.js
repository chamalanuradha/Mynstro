import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
dotenv.config();

const app = express();
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => 
//     .catch((error) => console.log(`${error} did not connect`));


