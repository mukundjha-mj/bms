import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hii there")
})

app.post("/signup", async(req, res) => {
    const { username, password } = req.body;

    const response = await client.user.create({
        data: {
            username: username,
            password: password
        }
    })

    res.json({
        message: "Signup Successfull",
        id: response.id
    })
})

app.listen(3002)