import { DecomposeNumberRepository } from "../../repositories/implementations/DecomposeNumberRepository";
import {  DecomposeNumberUseCase} from "./DecomposeNumberUseCase";

let decomposeNumberUseCase: DecomposeNumberUseCase;
let decomposeNumberRepository: DecomposeNumberRepository;
describe(
    "Calculate cans", () => {
        beforeEach(() => {
            decomposeNumberRepository = DecomposeNumberRepository.getInstance()
            decomposeNumberUseCase = new DecomposeNumberUseCase(decomposeNumberRepository);
        })
        it("should be able to calculate", () => {


            expect(calculateWallUseCase.execute({
                walls: [
                    {
                        "door": 1,
                        "window": 1,
                        "height": 2.30,
                        "width": 10
                    }
                ]
            })).toStrictEqual({
                "totalLitros": 4,
                "totalLatas": "1 lata de 3.6  1 lata de 0.5 Vai sobrar: 0.1 de Tinta"
            })
        })
        it("should not be able to calculate when the wall and door dont have more 30cm space entry", () => {

            expect(() => {
                calculateWallUseCase.execute({
                    walls: [
                        {
                            "door": 1,
                            "window": 0,
                            "height": 1,
                            "width": 5
                        }
                    ]
                })
            }).toThrowError()
        })

        it("should not be able to calculate when the wall is bigger than 50m", () => {

            expect(() => {
                calculateWallUseCase.execute({
                    walls: [
                        {
                            "door": 0,
                            "window": 0,
                            "height": 51,
                            "width": 5
                        }
                    ]
                })
            }).toThrowError()
        })

        it("should not be able to calculate when the wall is than less 1m", () => {

            expect(() => {
                calculateWallUseCase.execute({
                    walls: [
                        {
                            "door": 0,
                            "window": 0,
                            "height": 0.90,
                            "width": 5
                        }
                    ]
                })
            }).toThrowError()
        })
    }

);