import { Repository, EntityRepository } from "typeorm";
import {ProductDB} from "../entities/ProductDB";

@EntityRepository(ProductDB)
export class ProductDBRepositories extends Repository<ProductDB>{};