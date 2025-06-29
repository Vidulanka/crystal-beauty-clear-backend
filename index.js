import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import verifyJWT from "./middleware/auth.js";
import orderRouter from "./routes/orderRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contactRouter.js";
dotenv.config()

const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(
        ()=>{
           console.log("connect to the database");

        }

).catch(
   
  ()=>{

      console.log("connection faill");

  }


)


app.use(bodyParser.json());
// Public route for contact form
app.use("/api/contact",contactRouter)


// JWT verification middleware for protected routes
app.use(verifyJWT )



app.use("/api/User" , userRouter)
app.use("/api/product",productRouter)
app.use("/api/order",orderRouter)









app.listen(5000,
    ()=>{
    console.log("server is running on port 5000");
 }
)