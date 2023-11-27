import { Router } from "express";

import {
    getRoupa,
    getRoupaId,
    createRoupa,
    updateRoupa,
    deleteRoupa,
}from   "../controller/roupas.controller.js";

const RoupoRouter = Router();

RoupoRouter.get("/", getRoupa);
RoupoRouter.get("/:id", getRoupaId);
RoupoRouter.post("/", createRoupa);
RoupoRouter.put("/:id", updateRoupa);
RoupoRouter.delete("/:id", deleteRoupa);

export default RoupoRouter;