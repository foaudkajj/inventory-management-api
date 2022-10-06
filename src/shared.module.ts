import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MerchantRepository} from './endpoints/merchant/merchant.repository';
import { Merchant } from './models';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  controllers: [],
  providers: [MerchantRepository],
  exports: [MerchantRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
