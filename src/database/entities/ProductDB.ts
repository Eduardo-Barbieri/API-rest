import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("PoductDB")
export class ProductDB{

	@PrimaryGeneratedColumn()
    id: string;

    @Column()
    tipo : string;

    @Column()
    produto : string;

    @Column()
    valor : number;
    
    constructor(){
    	if(!this.id){
    		this.id = uuid();
    	}
    }
}