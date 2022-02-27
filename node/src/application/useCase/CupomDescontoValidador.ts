import CupomDesconto from "../../domain/CupomDesconto";
import CupomRepositorio from "../../domain/CupomRepositorio";
import CupomDTO from "../dto/CupomDTO";
import ResultadoCupomValidador from "../dto/ResultadoCupomValidador";

export default class CupomDescontoValidador{

    private repositorio: CupomRepositorio;


    constructor(repositorio: CupomRepositorio){
        this.repositorio = repositorio;
    }

    public ehValido(cupomDTO: CupomDTO, data: Date): ResultadoCupomValidador{
        let resultado = false;
        const cupom = this.repositorio.getCupom(cupomDTO.codigoCupom);
        if (cupom){
            resultado = !cupom.estaExpirado(data);
        }
        return new ResultadoCupomValidador(resultado);
    }
}