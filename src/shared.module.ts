import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ColorRepository} from './endpoints/color/color.repository';
import {CurrencyRepository} from './endpoints/currency/currency.repository';
import {CustomerInfoRepository} from './endpoints/customer-info/customer-info.repository';
import {MerchantRepository} from './endpoints/merchant/merchant.repository';
import {UnitRepository} from './endpoints/unit/unit.repository';
import {Color, Currency, CustomerInfo, Merchant} from './models';
import {Unit} from './models/unit.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Unit, Color, Currency, CustomerInfo]),
  ],
  controllers: [],
  providers: [
    MerchantRepository,
    UnitRepository,
    ColorRepository,
    CustomerInfoRepository,
    CurrencyRepository,
  ],
  exports: [
    MerchantRepository,
    UnitRepository,
    ColorRepository,
    CustomerInfoRepository,
    CurrencyRepository,
  ],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
