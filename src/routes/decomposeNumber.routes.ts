import { Request, Response, Router } from "express";
import { decomposeNumberController } from "../modules/decomposeNumber/useCases/decomposeNumber";
import {listDecomposedNumbersController  } from "../modules/decomposeNumber/useCases/listDecomposedNumber";


const calculateRoutes = Router();

calculateRoutes.post("/", (request: Request, response: Response) => {
        return decomposeNumberController.handle(request, response);
})


calculateRoutes.get("/", (request: Request, response: Response) => {
        return listDecomposedNumbersController.handle(request, response);
})

export { calculateRoutes }