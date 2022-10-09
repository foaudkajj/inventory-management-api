const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class userTable20221009165725 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`user\`(
                \`id\` char(36) not null,
                \`first_name\` varchar(50) not null,
                \`last_name\` varchar(50) not null,
                \`username\` varchar(50) not null,
                \`status\` enum('Active','Passive') default 'Active' null,
                \`password\` varchar(200) null,
                \`picture_url\` varchar(200) null,
                \`email\` varchar(50) null,
                \`gsm\` varchar(30) null,
                \`salt\` varchar(100) null,
                \`role_id\` char(36) not null,
                \`branch_id\` char(36) not null,
                \`merchant_id\` char(36) not null,
                constraint \`pk_user\` primary key (\`id\`),
                constraint \`fk_user_merchant\` foreign key (\`merchant_id\`) references \`merchant\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_user_role\` foreign key (\`role_id\`) references \`role\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_user_branch\` foreign key (\`branch_id\`) references \`branch\` (\`id\`) on update cascade on delete restrict
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`user\`;`
        )
    }

}
