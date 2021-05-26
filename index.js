import express from "express";
import router from "./routes/car-routes.js";

const app = express();
app.use(express.json());
app.use("/marcas", router);



app.listen(3001, () => {
    console.log(`Listening on port 3001 ;)`);
});