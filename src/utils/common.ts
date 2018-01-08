export default class Common {
    static calculatePrimeNumber(calculatingNumber: number) {
        if (calculatingNumber === 1) {
            return false;
        }
        else if (calculatingNumber === 2) {
            return true;
        } else {
            for (var x = 2; x < calculatingNumber; x++) {
                if (calculatingNumber % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }
}