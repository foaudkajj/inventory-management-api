const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class salePaymentMethodTable20221009193525 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`sale_payment_method\`(
                \`id\` char(36) not null,
                \`amount\` decimal(8,2) not null,
                \`sale_id\` char(36) not null,
                \`payment_method_id\` char(36) not null,
                constraint \`pk_sale_payment_method\` primary key (\`id\`),
                constraint \`fk_sale_payment_method_sale\` foreign key (\`sale_id\`) references \`sale\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_sale_payment_method_payment_method\` foreign key (\`payment_method_id\`) references \`payment_method\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`sale_payment_method\`;`
        )
    }

}
