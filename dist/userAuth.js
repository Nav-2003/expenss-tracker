import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { UserModel } from './db.js';
dotenv.config();
let SECRET_KEY = process.env.SECRET_KEY;
const router = express.Router();
router.get('/', (req, res) => {
    res.send('you are connected to the backend');
});
router.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    await UserModel.create({
        email: email,
        password: hashpassword,
        name: name
    }).then(() => {
        return res.send('user signup successfull');
    }).catch(() => {
        return res.send('error in signup');
    });
});
router.post('/signIn', async (req, res) => {
    if (!req.body) {
        var token = req.cookies?.token;
    }
    else {
        var { email, password } = req?.body;
    }
    console.log(email, password, token);
    if (email && password) {
        const token = await jwt.sign({ email: email }, SECRET_KEY);
        const result = await UserModel.findOne({ email: email });
        if (!result) {
            return res.send("email is not found");
        }
        if (await bcrypt.compare(password, result.password)) {
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 3600000
            });
            res.send('user is login');
        }
        else {
            res.send("user or password are incorrect");
        }
    }
    else {
        const result = await jwt.verify(token, SECRET_KEY);
        if (!result) {
            return res.send("please login....");
        }
        return res.send(result);
    }
});
router.get('/getDetail', (req, res) => {
    res.send("Mother Chod ho tume");
});
export default router;
//# sourceMappingURL=userAuth.js.map