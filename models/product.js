import mongoose from "mongoose";
const productSchema = new mongoose.Schema({

    //productID,name,price,lebeledPrice,stock
    productID:{
        type: String,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true

    },
    altNames:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        required:true
    },
    lebeledPrice:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true,
        default:["https://www.freepik.com/free-psd/beauty-sales-podium-background_233892749.htm#fromView=keyword&page=1&position=9&uuid=795e7952-3a5a-495e-9e1d-cdaaa391320e&query=Beauty+Product"]

    },
    stock:{
        type:Number,
        required:true
    },
 
})
const Product = mongoose.model("products",productSchema);
export default Product;