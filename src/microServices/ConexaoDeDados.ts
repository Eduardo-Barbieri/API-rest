import {getCustomRepository,createQueryBuilder, Between} from "typeorm";
import { ProductDBRepositories } from "../database/repositories/ProductDBRepositories";

export async function ConexaoDados(tipoEstruturado,valorTexto){
	const productDBRepositories = getCustomRepository(ProductDBRepositories);
	let found = await productDBRepositories.find({"tipo":tipoEstruturado,"valor":Between(valorTexto-100,valorTexto+100)});
	return found;
}