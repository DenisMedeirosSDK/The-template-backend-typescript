import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ExampleDB1593025425070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'exampledb',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          }
        ],
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
