const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class productPropertiesInsert20221103180200 {

    async up(queryRunner) {
        await queryRunner.query(`
        insert into \`product_property\` values 
        (\'de5a4138-d0f6-4021-bfc2-4b3b77c83004\', \'string\', \'STOCK_MODULE.MASTER_DATA.COLOR_NAME\',    \'colorId\',           \'dxSelectBox\', \'[{ "type": "required" }]\', null,null,null),
        (\'7b7a9fe8-15fe-41ab-8721-2588139949b6\', \'bool\', \'STOCK_MODULE.MASTER_DATA.GENDER\',         \'gender\',            \'dxSelectBox\', \'[{ "type": "required" }]\', null,null,null),
        (\'d9c18674-1831-4293-add9-00f523476213\', \'date\', \'STOCK_MODULE.MASTER_DATA.PRODUCT_YEAR\',   \'productYear\',       \'dxDateBox\', \'[{ "type": "required" }]\', \'{ "calendarOptions": {"zoomLevel": "decade", "maxZoomLevel": "decade", "minZoomLevel": "year" }, "displayFormat": "yyyy", "validationRules": [{ "type": "required" }]}\',null,\'{"allowHeaderFiltering": false}\'),
        (\'1db5b66a-8ca2-410f-9c71-5d108d21d402\', \'number\', \'STOCK_MODULE.MASTER_DATA.SIZE\',         \'size\',              \'dxNumberBox\', \'[{ "type": "required" }]\', null,null,null),
        (\'07a80f8d-df03-4790-9ee9-de66d1c4755b\', \'date\', \'STOCK_MODULE.MASTER_DATA.EXPIRATION_DATE\', \'expirationDate\',   \'dxDateBox\', \'[{ "type": "required" }]\', null,null,null),
        (\'1d8150c7-b007-451f-97a1-98d76865957a\', \'string\', \'STOCK_MODULE.MASTER_DATA.DESCRIPTION\',  \'description\',      \'dxTextArea\', null, null,null,null);
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
        delete from \`product_property\` where id in (
            \'de5a4138-d0f6-4021-bfc2-4b3b77c83004\',
            \'7b7a9fe8-15fe-41ab-8721-2588139949b6\',
            \'d9c18674-1831-4293-add9-00f523476213\',
            \'1db5b66a-8ca2-410f-9c71-5d108d21d402\',
            \'07a80f8d-df03-4790-9ee9-de66d1c4755b\',
            \'1d8150c7-b007-451f-97a1-98d76865957a\'
        );
        `);
    }

}
