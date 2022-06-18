import {DecomposeNumber} from "../../model/DecomposeNumber";
import { WallRepository } from "../../decomposeNumber/repositories/implementations/WallsRepository";
import { CalculateWallUseCase } from "../decomposeNumber/DecomposeNumberUseCase";
import { ListWallsCalculatedUseCase } from "./ListDecomposedNumberUseCase";

let listWallUseCase: ListWallsCalculatedUseCase;
let listWallRepository: WallRepository;
let calculateWallUseCase: CalculateWallUseCase;
describe(
    "List walls", () => {
        beforeEach(() => {
            listWallRepository = WallRepository.getInstance()
            calculateWallUseCase = new CalculateWallUseCase(listWallRepository);
            listWallUseCase = new ListWallsCalculatedUseCase(listWallRepository);
        })

        it("should be able to list walls calculated", async () => {
           
             const oneObject = listWallRepository.calculate({
                walls: [
                    {
                        "door": 1,
                        "window": 2,
                        "height": 8,
                        "width": 5
                    }
                ]
            })
            const twoObject = listWallRepository.calculate({
                walls: [
                    {
                        "door": 0,
                        "window": 0,
                        "height": 18,
                        "width": 5
                    }
                ]
            })
            

           const walls =  listWallUseCase.execute()

           expect(walls).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                totalLatas: "1 lata de 3.6 1 lata de 2.5 1 lata de 0.5  1 lata de 0.5 Vai sobrar: 0.1 de Tinta",
                totalLitros: 7,
              }),
              twoObject
            ])
          );
        })
    }

);