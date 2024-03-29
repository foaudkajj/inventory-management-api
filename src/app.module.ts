import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthService} from './endpoints/auth/auth.service';
import {LocalStrategy} from './endpoints/auth/strategies/local.strategy';
import {BranchController} from './endpoints/branch/branch.controller';
import {BranchService} from './endpoints/branch/branch.service';
import {CityController} from './endpoints/city/city.controller';
import {CityService} from './endpoints/city/city.service';
import {ColorController} from './endpoints/color/color.controller';
import {ColorService} from './endpoints/color/color.service';
import {CountryController} from './endpoints/country/country.controller';
import {CountryService} from './endpoints/country/country.service';
import {CurrencyController} from './endpoints/currency/currency.controller';
import {CurrencyService} from './endpoints/currency/currency.service';
import {CustomerInfoController} from './endpoints/customer-info/customer-info.controller';
import {CustomerInfoService} from './endpoints/customer-info/customer-info.service';
import {MerchantController} from './endpoints/merchant/merchant.controller';
import {MerchantService} from './endpoints/merchant/merchant.service';
import {PaymentMethodController} from './endpoints/payment-method/payment-method.controller';
import {PaymentMethodService} from './endpoints/payment-method/payment-method.service';
import {RoleController} from './endpoints/role/role.controller';
import {RoleService} from './endpoints/role/role.service';
import {TransactionCardController} from './endpoints/transaction-card/transaction-card.controller';
import {TransactionCardService} from './endpoints/transaction-card/transaction-card.service';
import {TransactionController} from './endpoints/transaction/transaction.controller';
import {TransactionService} from './endpoints/transaction/transaction.service';
import {UnitController} from './endpoints/unit/unit.controller';
import {UnitService} from './endpoints/unit/unit.service';
import {UserController} from './endpoints/user/user.controller';
import {UserService} from './endpoints/user/user.service';
import {SharedModule} from './shared.module';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategy} from './endpoints/auth/strategies/jwt.strategy';
import {PermissionService} from './endpoints/permission/permission.service';
import {RolePermissionService} from './endpoints/role-permission/role-permission.service';
import {AuthController} from './endpoints/auth/auth.controller';
import {ProductPropertyService} from './endpoints/product-property/product-property.service';
import {ProductTypeService} from './endpoints/product-type/product-type.service';
import {ProductService} from './endpoints/product/product.service';
import {ProductPropertyController} from './endpoints/product-property/product-property.controller';
import {ProductTypeController} from './endpoints/product-type/product-type.controller';
import {ProductController} from './endpoints/product/product.controller';
import {RolesGuard} from './endpoints/auth/guards/roles.guard';
import {APP_GUARD} from '@nestjs/core';
import {JwtAuthGuard} from './endpoints/auth/guards/jwt-auth.guard';
import {PermissionController} from './endpoints/permission/permission.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: false,
      logging: false,
      extra: {
        decimalNumbers: true,
      },
      autoLoadEntities: true,
      keepConnectionAlive: true,
      migrationsRun: true,
      migrations: ['migration/*.js'],
    }),
    SharedModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '15m'},
    }),
  ],
  controllers: [
    AppController,
    MerchantController,
    UnitController,
    ColorController,
    CurrencyController,
    CustomerInfoController,
    PaymentMethodController,
    TransactionCardController,
    TransactionController,
    CityController,
    CountryController,
    BranchController,
    RoleController,
    UserController,
    AuthController,
    ProductPropertyController,
    ProductTypeController,
    ProductController,
    PermissionController,
  ],
  providers: [
    AppService,
    MerchantService,
    UnitService,
    ColorService,
    CurrencyService,
    CustomerInfoService,
    PaymentMethodService,
    TransactionCardService,
    TransactionService,
    CityService,
    CountryService,
    BranchService,
    RoleService,
    UserService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    PermissionService,
    RolePermissionService,
    ProductPropertyService,
    ProductTypeService,
    ProductService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [UserService],
})
export class AppModule {}
