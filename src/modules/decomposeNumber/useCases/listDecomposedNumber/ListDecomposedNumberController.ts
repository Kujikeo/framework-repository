import { Request, Response } from "express";
import { ListDecomposedNumberUseCase } from "./ListDecomposedNumberUseCase";

class ListDecomposedNumberController {

       
    constructor(private listDecomposedNumberUseCase: ListDecomposedNumberUseCase) {}


    handle(request: Request, response: Response): Response {

        return response.status(200).json(this.listDecomposedNumberUseCase.execute()); 

    }
}
export { ListDecomposedNumberController }