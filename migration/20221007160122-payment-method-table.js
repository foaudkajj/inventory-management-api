const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class paymentMethodTable20221007160122 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`payment_method\`(
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                constraint \`pk_payment_method\` primary key (\`id\`)
            ) Engine = InnoDB;`
            ,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`payment_method\`;`,
        )
    }

}
