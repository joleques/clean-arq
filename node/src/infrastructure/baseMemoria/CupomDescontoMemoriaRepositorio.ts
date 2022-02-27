import CupomDesconto from "../../domain/CupomDesconto";
import CupomRepositorio from "../../domain/CupomRepositorio";


export default class CupomDescontoMemoriaRepositorio implements CupomRepositorio{

    private cupons: Array<CupomDesconto>

    constructor(){
        const cupom20 = new CupomDesconto(20, new Date(Date.now() + 100000))
        const cupom30 = new CupomDesconto(30, new Date(Date.now() + 100000))
        const cupom40 = new CupomDesconto(30, new Date(Date.now() - 100000))
        this.cupons = [cupom20, cupom30, cupom40];

    }

    public getCupom(codigoCupom: string): CupomDesconto | undefined {        
       return this.cupons.find(cupom => {return cupom.getId() == codigoCupom})        
    }

}