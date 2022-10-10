const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class saleProductTable20221009192825 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`sale_product\`(
                \`id\` char(36) not null,
                \`product_count\` integer not null,
                \`selling_price\` decimal(8,2) not null,
                \`price\` decimal(8,2) not null,
                \`operation\` enum('Soled','Returned','Changed','TakenInsteadOfOldProducts') not null,
                \`last_operation\` enum('Soled','Returned','Changed','TakenInsteadOfOldProducts') not null,
                \`sale_id\` char(36) not null,
                \`product_id\` char(36) not null,
                constraint \`pk_sale_product\` primary key (\`id\`),
                constraint \`fk_sale_product_sale\` foreign key (\`sale_id\`) references \`sale\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_sale_product_product\` foreign key (\`product_id\`) references \`product\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`sale_product\`;`
        )
    }

}
