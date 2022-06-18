
import { DecomposeNumber } from "../../model/DecomposeNumber";
import {IDecomposeNumberRepository } from "../../repositories/IDecomposeNumberRepository";



class ListDecomposedNumberUseCase {
    
    constructor(private decomposeNumberRepository: IDecomposeNumberRepository) {}

    execute():DecomposeNumber[] {
        const decomposedNumbers = this.decomposeNumberRepository.list();
        return decomposedNumbers;
    }

}

export { ListDecomposedNumberUseCase }