const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class roleTable20221009164725 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`role\`(
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                \`merchant_id\` char(36) not null,
                constraint \`pk_role\` primary key (\`id\`),
                constraint \`fk_role_merchant\` foreign key (\`merchant_id\`) references \`merchant\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`role\`;`
        )
    }

}
