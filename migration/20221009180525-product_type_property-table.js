const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productTypePropertyTable20221009180525 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`product_type_property\`(
                \`id\` char(36) not null,
                \`product_property_id\` char(36) not null,
                \`product_type_id\` char(36) not null,
                constraint \`pk_product_type_property\` primary key (\`id\`),
                constraint \`fk_product_type_property_product_type\` foreign key (\`product_type_id\`) references \`product_type\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_product_type_property_product_property\` foreign key (\`product_property_id\`) references \`product_property\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`product_type_property\`;`
        )
    }

}
