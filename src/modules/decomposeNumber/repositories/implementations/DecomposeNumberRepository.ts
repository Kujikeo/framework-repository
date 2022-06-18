import { DecomposeNumber } from "../../model/DecomposeNumber";
import { IDecomposeNumberRepository, IDecomposeNumberDTO } from "../IDecomposeNumberRepository";

interface IReturnResultDecomposeNumber {
    divisibleNumbers: number[];
    primeNumbers: number[];
    createdAt?: Date;
}

class DecomposeNumberRepository implements IDecomposeNumberRepository {
    private decomposeNumbersList: DecomposeNumber[];
    private static INSTANCE: DecomposeNumberRepository;

    private constructor() {
        this.decomposeNumbersList = [];
    }

    public static getInstance(): DecomposeNumberRepository {
        if (!DecomposeNumberRepository.INSTANCE) {
            DecomposeNumberRepository.INSTANCE = new DecomposeNumberRepository();
        }
        return DecomposeNumberRepository.INSTANCE;
    }

    decomposeNumber({ number }: IDecomposeNumberDTO): IReturnResultDecomposeNumber {

        const numberDivisible = this.findDivisibleNumbers(number);

        this.decomposeNumbersList.push({
            divisibleNumbers: numberDivisible.divisibleNumbers,
            primeNumbers: numberDivisible.primeNumbers,
            createdAt: new Date()
        })
        return numberDivisible
    }

    private findDivisibleNumbers(number: number): IReturnResultDecomposeNumber {

        const divisibleNumbers = [];
        const primeNumbers = [];

        for (let i = 0; i <= number; i++) {
            if (number % i === 0) {
                divisibleNumbers.push(i);
                if (this.isPrime(i)) {
                    primeNumbers.push(i);
                } else if (i === 1) {
                    primeNumbers.push(i);
                }
            }
        }

        return {
            divisibleNumbers: divisibleNumbers,
            primeNumbers: primeNumbers
        }
    }

    private isPrime(number: number): boolean {
        for (let divisible = 2; divisible < number; divisible++)
            if (number % divisible === 0) {
                return false
            };
        return number > 1;
    }

    list(): DecomposeNumber[] {
        return this.decomposeNumbersList
    }
}

export { DecomposeNumberRepository }