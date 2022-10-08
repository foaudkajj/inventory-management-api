import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorController } from './endpoints/color/color.controller';
import { ColorService } from './endpoints/color/color.service';
import { CurrencyController } from './endpoints/currency/currency.controller';
import { CurrencyService } from './endpoints/currency/currency.service';
import { CustomerInfoController } from './endpoints/customer-info/customer-info.controller';
import { CustomerInfoService } from './endpoints/customer-info/customer-info.service';
import { MerchantController } from './endpoints/merchant/merchant.controller';
import { MerchantService } from './endpoints/merchant/merchant.service';
import { PaymentMethodController } from './endpoints/payment-method/payment-method.controller';
import { PaymentMethodService } from './endpoints/payment-method/payment-method.service';
import { TransactionCardController } from './endpoints/transaction-card/transaction-card.controller';
import { TransactionCardService } from './endpoints/transaction-card/transaction-card.service';
import { TransactionController } from './endpoints/transaction/transaction.controller';
import { TransactionService } from './endpoints/transaction/transaction.service';
import { UnitController } from './endpoints/unit/unit.controller';
import { UnitService } from './endpoints/unit/unit.service';
import { SharedModule } from './shared.module';

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
    TransactionController
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
    TransactionService
  ],
})
export class AppModule { }
