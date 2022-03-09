import { app } from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 5000;
const uri: string = process.env.MONGODB_HOST || "";

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(uri);
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
