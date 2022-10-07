const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class currencyTable20221009125125 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`currency\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`currency\`;`,
          );
    }

}
