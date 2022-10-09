const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class cityTable20221009155225 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`city\`(
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                constraint \`pk_transaction\` primary key (\`id\`)
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`city\`;`
        )
    }

}
