import { DecomposeNumber } from "../../model/DecomposeNumber";
import { DecomposeNumberRepository } from "../../repositories/implementations/DecomposeNumberRepository";
import { DecomposeNumberUseCase } from "../decomposeNumber/DecomposeNumberUseCase";
import { ListDecomposedNumberUseCase } from "./ListDecomposedNumberUseCase";

let listDecomposedNumberUseCase: ListDecomposedNumberUseCase;
let listDecomposedNumberRepository: DecomposeNumberRepository;
let decomposedNumberUseCase: DecomposeNumberUseCase;
describe(
    "List decomposed numbers", () => {
        beforeEach(() => {
            listDecomposedNumberRepository = DecomposeNumberRepository.getInstance()
            decomposedNumberUseCase = new DecomposeNumberUseCase(listDecomposedNumberRepository);
            listDecomposedNumberUseCase = new ListDecomposedNumberUseCase(listDecomposedNumberRepository);
        })

        it("should be able to list walls calculated", async () => {

            const oneObject = listDecomposedNumberRepository.decomposeNumber({
                number: 45
            })
            const twoObject = listDecomposedNumberRepository.decomposeNumber({
                number: 25
            })


            const decomposeNumbers = listDecomposedNumberUseCase.execute()

            expect(decomposeNumbers).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
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
                        ],
                        "createdAt": "2022-06-19T14:57:18.100Z"
                    },
                    ),
                    twoObject
                ])
            );
        })
    }

);