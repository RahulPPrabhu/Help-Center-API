import express from "express";
import Card from "./model/Card.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { addCards } from "./common/addCards.js";
import { getCardsByTitle } from "./common/getCardsByTitle.js";
import CORS from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(CORS());
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error Connecting to DB", error.message);
    })

app.get('/ping', (req, res) => {
    res.send("Up and Running");
})

app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    }
    catch (error) {
        res.status(422).json({ message: "Error cannot fetch the cards.", error });
    }
})

app.get('/cards/:title', async (req, res) => {
    try {
        const _title = req.params.title;
        console.log(_title);
        const response = await getCardsByTitle(_title);
        if (response) {
            res.status(200).json({ data: response });
        } else {
            res.status(422).json({ message: "Cannot find the requested card" });
        }
    } catch (error) {
        res.status(500).json({ message: "Try again Later", error });
    }
})

app.post('/cards', async (req, res) => {
    try {
        let _data = await req.body;
        console.log("Data inside the post method", _data);
        const new_card = await addCards(_data);
        res.status(200).json({ data: new_card });
    } catch (error) {
        console.log(error);
        res.status(422).json({ message: "Cannot add new cards at the moment", error });
    }
})

app.listen(PORT, () => {
    console.log(`App running at ${PORT}`);
})