import { DecomposeNumber } from "../model/DecomposeNumber";

interface IDecomposeNumberDTO {
   number: number;
}

interface IReturnResultDecomposeNumberDTO {
    divisibleNumbers: number[];
    primeNumbers: number[];
}

interface IDecomposeNumberRepository {
    list(): DecomposeNumber[];
    decomposeNumber({ number }: IDecomposeNumberDTO): IReturnResultDecomposeNumberDTO;
}
export { IDecomposeNumberRepository, IDecomposeNumberDTO }