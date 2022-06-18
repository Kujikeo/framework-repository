
import { v4 as uuidV4 } from "uuid"

class DecomposeNumber {
    id?: string;
    divisibleNumbers: number[];
    primeNumbers: number[];
    createdAt: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { DecomposeNumber }