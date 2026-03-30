import express from "express";
import { listar, adicionar, adicionarPontos } from "../controllers/jogadorController.js";

const router = express.Router();

router.get("/", listar);
router.post("/adicionar", adicionar);
router.post("/pontuar/:id", adicionarPontos);

export default router;