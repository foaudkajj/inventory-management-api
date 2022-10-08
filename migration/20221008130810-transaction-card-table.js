const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class transactionCardTable20221008130810 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`transaction_card\`(
                \`id\` char(36) not null,
                \`create_date\` datetime not null,
                \`code\` varchar(50) null,
                \`owner_name\` varchar(50) null,
                \`gsm\` varchar(50) null,
                \`currency_id\` char(36) null,
                constraint \`pk_transaction_card\` primary key (\`id\`),
                constraint \`fk_transaction_card_currency\` foreign key (\`currency_id\`) references \`currency\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
            ,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`transaction_card\`;`,
        )
    }

}
