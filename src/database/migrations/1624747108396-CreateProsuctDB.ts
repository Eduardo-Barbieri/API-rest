import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProsuctDB1624747108396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "PoductDB",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"tipo",
                        type:'varchar',
                    },
                    {
                        name:"produto",
                        type:"varchar"
                    },
                    {
                        name:"valor",
                        type:"number"
                    }
                ]

            })
            );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ProductDB");
    }

}
