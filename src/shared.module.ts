import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityRepository } from './endpoints/city/city.repository';
import { ColorRepository } from './endpoints/color/color.repository';
import { CurrencyRepository } from './endpoints/currency/currency.repository';
import { CustomerInfoRepository } from './endpoints/customer-info/customer-info.repository';
import { MerchantRepository } from './endpoints/merchant/merchant.repository';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import { TransactionCardRepository } from './endpoints/transaction-card/transaction-card.repository';
import { TransactionRepository } from './endpoints/transaction/transaction.repository';
import { UnitRepository } from './endpoints/unit/unit.repository';
import { City, Color, Currency, CustomerInfo, Merchant, PaymentMethod, Transaction, TransactionCard } from './models';
import { Unit } from './models/unit.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Unit, Color, Currency, CustomerInfo, PaymentMethod, TransactionCard, Transaction, City]),
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
    CityRepository
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
    CityRepository
  ],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule { }
