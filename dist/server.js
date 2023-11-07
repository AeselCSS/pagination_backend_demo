import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import employeeRouter from "./routes/employee.router.js";
const app = express();
const port = process.env.PORT || 3100;
app.use(cors());
app.use(express.json());
app.use("/", employeeRouter);
app.use("/", async (_req, res) => {
    res.send("Server.js is running🎉");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
