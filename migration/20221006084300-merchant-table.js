const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class merchantTable20221006084300 {

    async up(queryRunner) {
        await queryRunner.query(
            `
            create table \`merchant\` (
                \`id\` char(36) not null,
                \`title\` varchar(100) not null,
                \`company_type\` varchar(50)  null,
                \`founding_date\` datetime  null,
                \`tax_office\` varchar(200)  null,
                \`tax_number\` varchar(10)  null,
                \`phone\` varchar(20)  null,
                \`website\` varchar(100)  null
              ) Engine=InnoDB;
              `,
          );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`merchant\`;`,
          );
    }

}
