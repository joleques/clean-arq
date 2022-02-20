
export default class CPF {
    private FACTOR_DIGIT_1 = 10;
    private FACTOR_DIGIT_2 = 11;

    constructor(readonly value: string) {

    }

    public validate(): boolean {
        let cpf = this.value;
        if (!cpf) return false;
        cpf = this.cleanCpf(cpf);
        if (!this.isValidLength(cpf)) return false;
        if (this.hasAllDigitsEqual(cpf)) return false;
        const digit1 = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_1);
        const digit2 = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_2);
        let checkDigit = this.extractCheckDigit(cpf);
        const calculatedDigit = `${digit1}${digit2}`;
        return checkDigit == calculatedDigit;
    }

    private cleanCpf(cpf: string) {
        return cpf.replace(/[\.\-]/g, "");
    }

    private isValidLength(cpf: string) {
        return cpf.length === 11;
    }

    private hasAllDigitsEqual(cpf: string) {
        const [firstDigit] = cpf;
        return [...cpf].every(digit => digit === firstDigit);
    }

    private calculateCheckDigit(cpf: any, factor: any) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1) total += digit * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : (11 - rest);
    }

    private extractCheckDigit(cpf: string) {
        return cpf.slice(-2);
    }
}