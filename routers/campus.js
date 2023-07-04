import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
const storageCampus = Router();
dotenv.config();
let con = undefined;
storageCampus.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
storageCampus.get('/', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM tb_client`,
        (err,res,fil)=>{
            console.log(res);
        }
    );
    res.send("soy post")
})
storageCampus.post('/', (req,res)=>{
    res.send("soy post");
})
storageCampus.put('/', (req,res)=>{
    res.send("soy put");
})
storageCampus.delete('/', (req,res)=>{
    res.send("soy delete");
})

export default storageCampus;

// appExpress.use(express.json());
// appExpress.use(express.text());
// storageCampus.get('/', (req,res)=>{
//     // console.log(req.params);
//     // console.log(req.query);
//     console.log(req.body);
//     res.send("revise la consola");
// })