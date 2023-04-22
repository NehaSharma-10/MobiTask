import express from "express";
import mongoose from "mongoose";
import cors from 'cors';


const app = express();
app.use(cors());


app.get("/demo", (req, res) => {
  res.send("hello world");
}); 

const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Neha");
  const productSchema = new mongoose.Schema({});
  const product = mongoose.model("datas", productSchema);
  const data = await product.find();
  // console.log(data);

  
  app.get("/users", (req, res) => {
    res.json(data);
  });
};
connectDB();

app.listen(8080, () => {
  console.log("port 8080 working");
});
