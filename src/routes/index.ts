import { Router } from "express";
import { calculateRoutes } from "./decomposeNumber.routes";


const router = Router();

router.use("/decompose",calculateRoutes);

export {router}
