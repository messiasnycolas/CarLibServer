import { Router } from "express";
import {
    mostModels,
    fewestModels,
    topRange,
    bottomRange,
    listModelsFrom,
} from "../controllers/carController.js"

const router = Router();

router.get("/mostModels", mostModels);
router.get("/fewestModels", fewestModels);
router.get("/topRange/:x", topRange);
router.get("/bottomRange/:x", bottomRange);
router.get("/listModels/:brand", listModelsFrom);

export default router;