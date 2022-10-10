const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class saleTable20221009174425 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`sale\`(
                \`id\` char(36) not null,
                \`date\` datetime not null,
                \`total\` decimal(8,2) not null,
                \`refund_amount\` decimal(8,2) not null,
                \`user_id\` char(36) not null,
                \`branch_id\` char(36) not null,
                \`merchant_id\` char(36) not null,
                \`customer_info_id\` char(36) not null,
                constraint \`pk_sale\` primary key (\`id\`),
                constraint \`fk_sale_user\` foreign key (\`user_id\`) references \`user\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_sale_merchant\` foreign key (\`merchant_id\`) references \`merchant\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_sale_branch\` foreign key (\`branch_id\`) references \`branch\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_sale_customer_info\` foreign key (\`customer_info_id\`) references \`customer_info\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`sale\`;`
        )
    }

}
