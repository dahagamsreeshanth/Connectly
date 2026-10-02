import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();

dotenv.config({ path: "../../.env" });


const mongodb_url = process.env.MONGODB_URL;

async function main() {
  await mongoose.connect(mongodb_url);
  console.log("connected to mongodb");
}

main().catch(err => console.log(err));

app.get("/back", (req, res) => {
    res.send("server is working");
});

app.get("/", (req, res) => {
    res.send("server is working");
});



app.listen(8080, () => {
    console.log("backend is working");
});
