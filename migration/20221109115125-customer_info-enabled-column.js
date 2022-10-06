const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class customerInfoEnabledColumn20221109115125 {

    async up(queryRunner) {
        await queryRunner.query(
            `
        create table \`customer_info\` (
            \`id\` char(36) not null,
            \`name\` varchar(50) not null,
            \`phone\` varchar(50)  null,
            \`accent_insensitive_name\` varchar(50)  not null
          ) Engine=InnoDB;
          `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`customer_info\`;`,
        );
    }

}
