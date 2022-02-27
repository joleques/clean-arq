import CupomDesconto from "./CupomDesconto";

export default interface CupomRepositorio{

    getCupom(codigoCupom: string): CupomDesconto | undefined;
}