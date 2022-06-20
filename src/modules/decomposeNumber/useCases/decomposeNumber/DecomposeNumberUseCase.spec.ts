import { DecomposeNumberRepository } from "../../repositories/implementations/DecomposeNumberRepository";
import { DecomposeNumberUseCase } from "./DecomposeNumberUseCase";

let decomposeNumberUseCase: DecomposeNumberUseCase;
let decomposeNumberRepository: DecomposeNumberRepository;
describe(
    "Decompose Number", () => {
        beforeEach(() => {
            decomposeNumberRepository = DecomposeNumberRepository.getInstance()
            decomposeNumberUseCase = new DecomposeNumberUseCase(decomposeNumberRepository);
        })
        it("should be able to decompose number", () => {

            expect(decomposeNumberUseCase.execute({
                number: 45
            })).toStrictEqual({
                "divisibleNumbers": [
                    1,
                    3,
                    5,
                    9,
                    15,
                    45
                ],
                "primeNumbers": [
                    1,
                    3,
                    5
                ]
            })
        })
        it("should not be able to decompose when the number is 0", () => {

            expect(() => {
                decomposeNumberUseCase.execute({
                    number: 0
                })
            }).toThrowError()
        })

        it("should not be able to decompose when the number is null", () => {

            expect(() => {
                decomposeNumberUseCase.execute({
                    number: null
                })
            }).toThrowError()
        })
    }
);