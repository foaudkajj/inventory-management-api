const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productTypeTable20221009175725 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`product_type\`(
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                constraint \`pk_product_type\` primary key (\`id\`)
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`product_type\`;`
        )
    }

}
