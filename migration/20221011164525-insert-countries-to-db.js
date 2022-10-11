const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class insertCountriesToDb20221011164525 {

    async up(queryRunner) {
        await queryRunner.query(
            `insert into \`country\` (\`id\`,\`name\`) values ('3fa85f64-5717-4562-b3fc-2c963f66afa7','country 1');`
        );
    }

}