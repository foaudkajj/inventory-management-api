const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productPropertyTable20221009175925 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`product_property\`(
                \`id\` char(36) not null,
                \`type\` varchar(10) null,
                \`translate\` varchar(100) null,
                \`data_field\` varchar(15) null,
                \`editor_type\` varchar(30) null,
                \`validation\` text(65535) null,
                \`form_item_editor_options\` text(65535) null,
                \`grid_column_editor_options\` text(65535) null,
                \`grid_column_conf\` text(65535) null,
                constraint \`pk_product_property\` primary key (\`id\`)
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`product_property\`;`
        )
    }

}
