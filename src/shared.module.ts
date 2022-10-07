import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ColorRepository} from './endpoints/color/color.repository';
import {CurrencyRepository} from './endpoints/currency/currency.repository';
import {CustomerInfoRepository} from './endpoints/customer-info/customer-info.repository';
import {MerchantRepository} from './endpoints/merchant/merchant.repository';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import {UnitRepository} from './endpoints/unit/unit.repository';
import {Color, Currency, CustomerInfo, Merchant, PaymentMethod} from './models';
import {Unit} from './models/unit.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Unit, Color, Currency, CustomerInfo,PaymentMethod]),
  ],
  controllers: [],
  providers: [
    MerchantRepository,
    UnitRepository,
    ColorRepository,
    CustomerInfoRepository,
    CurrencyRepository,
    PaymentMethodRepository
  ],
  exports: [
    MerchantRepository,
    UnitRepository,
    ColorRepository,
    CustomerInfoRepository,
    CurrencyRepository,
    PaymentMethodRepository
  ],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
