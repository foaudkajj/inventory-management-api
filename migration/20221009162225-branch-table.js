const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class branchTable20221009162225 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`branch\`(
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                \`city_id\` char(36) not null,
                \`country_id\` char(36) not null,
                \`merchant_id\` char(36) not null,
                constraint \`pk_branch\` primary key (\`id\`),
                constraint \`fk_branch_city\` foreign key (\`city_id\`) references \`city\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_branch_country\` foreign key (\`country_id\`) references \`country\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_branch_merchant\` foreign key (\`merchant_id\`) references \`merchant\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`branch\`;`
        )
    }

}
