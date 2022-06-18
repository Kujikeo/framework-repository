
import { IDecomposeNumberRepository } from "../../repositories/IDecomposeNumberRepository";

interface IRequest {
    number: number;
}

class DecomposeNumberUseCase {

    constructor(private decomposeNumberRepository: IDecomposeNumberRepository) { }

    execute({ number }: IRequest) {

        if (number == 0) {
            throw new Error("Set a number more than zero");
        }
        if (!number) {
            throw new Error("Number cannot be null");
        }

        return this.decomposeNumberRepository.decomposeNumber({ number })
    }
}

export { DecomposeNumberUseCase }