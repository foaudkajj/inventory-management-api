
const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class cityTable20221009161225 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`city\`(
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                \`country_id\` char(36) not null,
                constraint \`pk_city\` primary key (\`id\`),
                constraint \`fk_city_country\` foreign key (\`country_id\`) references \`country\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`city\`;`
        )
    }

}
