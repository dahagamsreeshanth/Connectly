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
    const user = new User({ name, email, password });
    try {
        await user.save();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
    console.log("user registered");
    res.status(201).json({ message: "User registered successfully" });
});

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            message: "Login successful"
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server error"
        });
    }
});




app.listen(8080, () => {
    console.log("backend is working");
});
