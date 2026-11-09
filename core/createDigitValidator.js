export function createDigitValidator(base) {
    return (char) => {
        return parseInt(char, base);
    };
}
