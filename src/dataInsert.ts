import express from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { ExpensModel,UserModel} from './db.js';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY;
const router=express.Router();

async function extract(){

}
router.post('/insertData',async(req,res)=>{
    const {electronic,health,cloth,education,grocery}=req.body;
    const token=req.cookies?.token;
    const result=jwt.verify(token,SECRET_KEY!) as JwtPayload;
    const data=await UserModel.findOne({email:result.email})
    await ExpensModel.create({
        "id":data?._id,
        "cloth":cloth,
        "electronic":electronic,
        "health":health,
        "education":education,
        "grocery":grocery
    }).then(()=>{
        return res.send("data inserted successfull....")
    }).
    catch(()=>{
        return res.send("error in data inserted");
    })
});

router.put('/upData',async(req,res)=>{
    const token=req?.cookies.token;
    const result=jwt.verify(token,SECRET_KEY!) as JwtPayload;
    const user=await UserModel.findOne({email:result.email});
    const data=req.body;
    console.log(data);
    await ExpensModel.updateOne(
        {id:user?._id},
        {$set:data}
    )
    res.send('update successfully....');    
});

router.delete('/delete',async(req,res)=>{
    const token=req.cookies.token;
    const result=jwt.verify(token,SECRET_KEY!) as JwtPayload;
    const user=await UserModel.findOne({email:result?.email});
    const data=req.body;
    console.log(data);
    await ExpensModel.updateOne(
        {id:user?.id},
        {$unset:data}
    );
    res.send('delete succussfully....');
})

router.get('/getData',(req,res)=>{

});

export default router;