const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class unitTable20221006145125 {

    async up(queryRunner) {
        await queryRunner.query(
            `
            create table \`unit\` (
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                \`code\` varchar(10)  null
              ) Engine=InnoDB;
              `,
        );

    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`unit\`;`,
        );
    }

}
