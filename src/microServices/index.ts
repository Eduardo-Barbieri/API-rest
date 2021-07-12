import { EstruturarValor } from "./RegrasDeNegocio";
import { IntegrarValor } from "./Integracao";
import { ConexaoDados } from "./ConexaoDeDados";

export function MicroServices(tipo,valor){
	let valorEstruturado = EstruturarValor(tipo,valor);
	let valorIntegrado = IntegrarValor(valorEstruturado);
	let conexaoDados = ConexaoDados(valorEstruturado['tipo'],valorIntegrado);

	return conexaoDados;
}