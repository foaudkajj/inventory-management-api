-- city Bursa
INSERT INTO `inventory_management`.`city` (`id`, `name`, `country_id`) VALUES ('17eba7f2-d563-4166-b8cd-e0d7c76b7829', 'Bursa', '01a88864-b14e-41d5-86ed-110ffbd6c2ce');

-- country Turkey
INSERT INTO `inventory_management`.`country` (`id`, `name`) VALUES ('01a88864-b14e-41d5-86ed-110ffbd6c2ce', 'Turkey');

-- merchant
INSERT INTO `inventory_management`.`merchant` (`id`, `title`, `company_type`, `founding_date`, `tax_office`, `tax_number`, `phone`, `website`) VALUES ('1a871d90-8718-4de7-96e4-e6feae2ee6ef', 'Merchant', NULL, NULL, NULL, NULL, NULL, NULL);

-- branch
INSERT INTO `inventory_management`.`branch` (`id`, `name`, `city_id`, `country_id`, `merchant_id`) VALUES ('0ee49b47-e7fa-43ed-9310-87d155d16be9', 'isparta', '17eba7f2-d563-4166-b8cd-e0d7c76b7829', '01a88864-b14e-41d5-86ed-110ffbd6c2ce', '1a871d90-8718-4de7-96e4-e6feae2ee6ef');

-- admin role
INSERT INTO `inventory_management`.`role` (`id`, `name`, `merchant_id`) VALUES ('a05716ff-602f-4c8f-aa44-b0a6823e5a9e', 'admin', '1a871d90-8718-4de7-96e4-e6feae2ee6ef');

-- username admin password admin
INSERT INTO `inventory_management`.`user` (`id`, `first_name`, `last_name`, `username`, `status`, `password`, `picture_url`, `email`, `gsm`, `salt`, `role_id`, `branch_id`, `merchant_id`) VALUES ('1cc45430-18b3-4264-8f43-4e81a2035afc', 'admin', 'admin', 'admin', 'Active', '$2a$10$3yjaj1u/sY.EyhSEFCLelewWs2XGsot.FgzX5V3Puia8q8Ge7bKPO', NULL, NULL, NULL, NULL, 'a05716ff-602f-4c8f-aa44-b0a6823e5a9e', '0ee49b47-e7fa-43ed-9310-87d155d16be9', '1a871d90-8718-4de7-96e4-e6feae2ee6ef');

