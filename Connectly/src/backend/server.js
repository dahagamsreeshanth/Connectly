import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from './models/user.js';
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());
app.use(cors());


dotenv.config({ path: "../../.env" });

const mongodb_url = process.env.MONGODB_URL;

async function main() {
  await mongoose.connect(mongodb_url);
  console.log("connected to mongodb");
}

main().catch(err => console.log(err));

 app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    try {
        await user.save();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
    console.log("user registered");
    res.status(201).json({ message: "User registered successfully" });
});




app.listen(8080, () => {
    console.log("backend is working");
});
