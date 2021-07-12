import {Router} from "express";
import {getCustomRepository,createQueryBuilder} from "typeorm";
import { ProductDBRepositories } from "../database/repositories/ProductDBRepositories";
import { MicroServices } from "../microServices";

export const router = Router(); 

router.get("/",(req,res)=>{
	res.status(200).json({
		message:"Servidor Online"
	});
});

router.post("/addToProductDB", async(req,res)=>{
	const {tipo, produto, valor} = req.body;

	const productDBRepositories = getCustomRepository(ProductDBRepositories);
	const productDB = productDBRepositories.create({
		tipo,
		produto,
		valor
	});

	await productDBRepositories.save(productDB);

	res.status(201).json(productDB);
});

router.get("/database", async (req,res)=>{
	const productDBRepositories = getCustomRepository(ProductDBRepositories);
 	let  all = await productDBRepositories.find();
    res.send(all);
});

//aplicando os microservices:
router.get("/pesquisa",  async (req,res)=>{
	const {tipo, valor} = req.body;
	let microServices = await MicroServices(tipo,valor);

	res.status(302).json(microServices);
});