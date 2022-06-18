import { DecomposeNumberRepository } from "../../repositories/implementations/DecomposeNumberRepository";
import { DecomposeNumberController } from "./DecomposeNumberController";
import { DecomposeNumberUseCase } from "./DecomposeNumberUseCase";


const decomposeNumberRepository =  DecomposeNumberRepository.getInstance();
const decomposeNumberUseCase = new DecomposeNumberUseCase(decomposeNumberRepository);
const decomposeNumberController = new DecomposeNumberController(decomposeNumberUseCase);

export {decomposeNumberController}