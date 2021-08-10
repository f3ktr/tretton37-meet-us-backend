import express, { Application, Request, Response } from "express";
import { getEmployees } from "./service/scrapper";
import cors from "cors";
const app: Application = express();

// const PORT = parseInt(process.env.PORT!) | 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(`app is running on ${process.env.PORT}`);
});

app.get("/employees", async (req: Request, res: Response) => {
  let name: any = req.query.name;
  let sort: any = req.query.sort;
  let office: any = req.query.office;
  await getEmployees(name, sort, office).then((data) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);
  });
});
app.listen(process.env.PORT);
