const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class transactionTable20221008202022 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`transaction\`(
                \`id\` char(36) not null,
                \`transaction_date\` datetime not null,
                \`transaction_type\` integer not null,
                \`amount\` decimal(8,2) null,
                \`description\` varchar(1000) null,
                \`payment_method_id\` char(36) null,
                \`transaction_card_id\` char(36) null,
                constraint \`pk_transaction\` primary key (\`id\`),
                constraint \`fk_transaction_payment_method\` foreign key (\`payment_method_id\`) references \`payment_method\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_transaction_transaction_card\` foreign key (\`transaction_card_id\`) references \`transaction_card\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
            ,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`transaction\`;`,
        )
    }

}
