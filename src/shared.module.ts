import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [],
  providers: [],
  exports: [],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
