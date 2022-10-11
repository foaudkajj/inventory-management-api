
const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class insertCitiesToDb20221011171125 {

    async up(queryRunner) {
        await queryRunner.query(
            `insert into \`city\` (\`id\`,\`name\`,\`country_id\`) values ('3fa85f64-5717-4562-b3fc-2c963f66afa9','city 1','3fa85f64-5717-4562-b3fc-2c963f66afa7');`
        );
    }

}
