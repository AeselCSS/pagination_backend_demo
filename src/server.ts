import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

// import routes
import employeeRouter from "./routes/employee.router.js";


const app = express();
const port: string | number = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());

app.use("/", employeeRouter);
app.use("/", async (_req: Request, res: Response) => {
    res.send("Server.js is running🎉")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

