import { Request, Response } from "express";
import { DecomposeNumberUseCase } from "./DecomposeNumberUseCase";

class DecomposeNumberController {

    constructor(private decomposeNumberUseCase: DecomposeNumberUseCase) { }

    handle(request: Request, response: Response): Response {

        const { number } = request.body;

        try {
            return response.status(201).json(this.decomposeNumberUseCase.execute({ number }));

        } catch (error) {
            return response.status(500).json({ error: error.message });
        }

    }
}
export { DecomposeNumberController }