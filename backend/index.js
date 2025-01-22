import express,{json} from 'express';
import { route } from './Routes/Route.js';
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config();

const app = express();

const port =process.env.PORT || 5000;

app.use(json());
app.use(cors())
app.use('/',route);

app.listen(port, ()=>{
    console.log(`server running port ${port}`);
    
})