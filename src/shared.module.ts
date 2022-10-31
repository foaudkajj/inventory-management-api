import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchRepository } from './endpoints/branch/branch.repository';
import { CityRepository } from './endpoints/city/city.repository';
import { ColorRepository } from './endpoints/color/color.repository';
import { CountryRepository } from './endpoints/country/country.repository';
import { CurrencyRepository } from './endpoints/currency/currency.repository';
import { CustomerInfoRepository } from './endpoints/customer-info/customer-info.repository';
import { MerchantRepository } from './endpoints/merchant/merchant.repository';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import { PermissionRepository } from './endpoints/permission/permission.repository';
import { RolePermissionRepository } from './endpoints/role-permission/role-permission.repository';
import { RoleRepository } from './endpoints/role/role.repository';
import { TransactionCardRepository } from './endpoints/transaction-card/transaction-card.repository';
import { TransactionRepository } from './endpoints/transaction/transaction.repository';
import { UnitRepository } from './endpoints/unit/unit.repository';
import { UserRepository } from './endpoints/user/user.repository';
import { Branch, City, Color, Country, Currency, CustomerInfo, Merchant, PaymentMethod, Permission, Product, ProductProperty, ProductType, Role, RolePermission, Sale, SalePaymentMethod, SaleProduct, Transaction, TransactionCard, User } from './models';
import { ProductTypeProperty } from './models/product-type-property.model';
import { Unit } from './models/unit.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Unit, Color, Currency, CustomerInfo, PaymentMethod, TransactionCard, Transaction, City, Country, Branch, Role, User, ProductProperty, ProductType, ProductTypeProperty, Sale, Product, SaleProduct, SalePaymentMethod,Permission,RolePermission]),
  ],
  controllers: [],
  providers: [
    MerchantRepository,
    UnitRepository,
    ColorRepository,
    CustomerInfoRepository,
    CurrencyRepository,
    PaymentMethodRepository,
    TransactionCardRepository,
    TransactionRepository,
    CityRepository,
    CountryRepository,
    BranchRepository,
    RoleRepository,
    UserRepository,
    PermissionRepository,
    RolePermissionRepository
  ],
  exports: [
    MerchantRepository,
    UnitRepository,
    ColorRepository,
    CustomerInfoRepository,
    CurrencyRepository,
    PaymentMethodRepository,
    TransactionCardRepository,
    TransactionRepository,
    CityRepository,
    CountryRepository,
    BranchRepository,
    RoleRepository,
    UserRepository,
    PermissionRepository,
    RolePermissionRepository
  ],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule { }
