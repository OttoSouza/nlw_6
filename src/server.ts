import "reflect-metadata";
import "express-async-errors"
import express from "express";
import { router } from "./modules/routes/index";
import { GlobalErrors } from "./middleware/error_message";
import "./database";

const app = express();
app.use(express.json());

app.use(router);
app.use((GlobalErrors));

app.listen(3333);