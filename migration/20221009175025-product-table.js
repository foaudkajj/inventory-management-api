const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productTable20221009175025 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`product\`(
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`barcode\` varchar(100) null,
                \`code\` varchar(100) null,
                \`gender\` varchar(50) not null,
                \`price\` decimal(8,2) not null,
                \`year\` varchar(100) null,
                \`size\` integer not null,
                \`quantity\` integer not null,
                \`selling_price\` decimal(8,2) not null,
                \`color_id\` char(36) not null,
                \`branch_id\` char(36) not null,
                \`merchant_id\` char(36) not null,
                \`unit_id\` char(36) not null,
                \`product_type_id\` char(36) not null,
                constraint \`pk_product\` primary key (\`id\`),
                constraint \`fk_product_color\` foreign key (\`color_id\`) references \`color\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_product_branch\` foreign key (\`branch_id\`) references \`branch\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_product_merchant\` foreign key (\`merchant_id\`) references \`merchant\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_product_product_type\` foreign key (\`product_type_id\`) references \`product_type\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_product_unit\` foreign key (\`unit_id\`) references \`unit\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`product\`;`
        )
    }

}
