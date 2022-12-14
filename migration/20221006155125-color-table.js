const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class colorTable20221006155125 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`color\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`code\` varchar(30)  null
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`color\`;`,
          );
    }

}
