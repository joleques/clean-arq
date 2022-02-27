import CupomDTO from "../../../src/application/dto/CupomDTO";
import ResultadoCupomValidador from "../../../src/application/dto/ResultadoCupomValidador";
import CupomDescontoValidador from "../../../src/application/useCase/CupomDescontoValidador";
import CupomDescontoMemoriaRepositorio from "../../../src/infrastructure/baseMemoria/CupomDescontoMemoriaRepositorio";


test("Deve validar o cupom de desconto quando o cupom é valido", () =>{
    const cupomDTO = new CupomDTO("VALE20");
    const cupomRepositorio = new CupomDescontoMemoriaRepositorio();
    const valdador = new CupomDescontoValidador(cupomRepositorio);
    const resultadoCupomValidador: ResultadoCupomValidador = valdador.ehValido(cupomDTO, new Date());
    expect(resultadoCupomValidador.ehValido).toBeTruthy()

})


test("Deve validar o cupom de desconto quando o cupom é invalido", () =>{
    const cupomDTO = new CupomDTO("VALE40");
    const cupomRepositorio = new CupomDescontoMemoriaRepositorio();
    const valdador = new CupomDescontoValidador(cupomRepositorio);
    const resultadoCupomValidador: ResultadoCupomValidador = valdador.ehValido(cupomDTO, new Date());
    expect(resultadoCupomValidador.ehValido).toBeFalsy()

})