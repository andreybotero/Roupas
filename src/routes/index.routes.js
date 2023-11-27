import { Router } from "express";
import  roupasRouter  from "./roupas.routes.js";

const router = Router();

router.use("/roupas", roupasRouter);

export default router;
