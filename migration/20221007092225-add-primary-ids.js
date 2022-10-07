const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class addPrimaryIds20221007092225 {

    async up(queryRunner) {
        await queryRunner.query(`alter table \`merchant\`       add constraint \`pk_merchant\` primary key (\`id\`);`,);
        await queryRunner.query(`alter table \`currency\`       add constraint \`pk_currency\` primary key (\`id\`);`,);
        await queryRunner.query(`alter table \`customer_info\`  add constraint \`pk_customer_info\` primary key (\`id\`);`,);
        await queryRunner.query(`alter table \`unit\`           add constraint \`pk_unit\` primary key (\`id\`);`);
        await queryRunner.query(`alter table \`color\`          add constraint \`pk_color\` primary key (\`id\`);`);
    }

    async down(queryRunner) {
        await queryRunner.query(`alter table \`merchant\` drop constraint \`pk_merchant\`;`);
        await queryRunner.query(`alter table \`currency\` drop constraint \`pk_currency\`;`);
        await queryRunner.query(`alter table \`customer_info\` drop constraint \`pk_customer_info\`;`);
        await queryRunner.query(`alter table \`unit\` drop constraint \`pk_unit\`;`);
        await queryRunner.query(`alter table \`color\` drop constraint \`pk_color\`;`);
    }

}
