import { DecomposeNumberRepository } from "../../repositories/implementations/DecomposeNumberRepository";
import { ListDecomposedNumberController } from "./ListDecomposedNumberController";
import { ListDecomposedNumberUseCase } from "./ListDecomposedNumberUseCase";


const decomposesNumbersRepository =  DecomposeNumberRepository.getInstance();
const listDecomposedNumbersUseCase = new ListDecomposedNumberUseCase(decomposesNumbersRepository);
const listDecomposedNumbersController = new ListDecomposedNumberController(listDecomposedNumbersUseCase);

export {listDecomposedNumbersController}