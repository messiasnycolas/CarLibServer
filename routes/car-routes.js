import express from "express";
import {
    moreModels,
    lessModels,
    topRange,
    lowRange,
    listModelsFrom,
} from "../controllers/carController.js"

const router = express.Router();

router.get("/maisModelos", moreModels);
router.get("/menosModelos", lessModels);
router.get("/listaMaisModelos/:x", topRange);
router.get("/listaMenosModelos/:x", lowRange);
router.get("/listaModelos/:marca", listModelsFrom);

export default router;