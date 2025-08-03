import express from 'express';
import mongoose from 'mongoose';
import authRouter from './userAuth.js';
import dataInsert from './dataInsert.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser());
await mongoose.connect('mongodb+srv://vimalchand1980:3DSJWFKfJNbW3RFi@cluster0.w58hk9q.mongodb.net/').then(() => {
    console.log('DataBase is connected');
}).catch(() => {
    console.log('An error happen during connection of database');
});
app.use('/auth', authRouter);
app.use('/data', dataInsert);
app.listen(3000, () => {
    console.log('backend server start');
});
//# sourceMappingURL=index.js.map