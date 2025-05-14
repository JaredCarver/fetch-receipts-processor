import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiptsModule } from './receipts/receipts.module';
import { ReceiptCacheService } from './receipt-cache/receipt-cache.service';

@Module({
  imports: [ReceiptsModule],
  controllers: [AppController],
  providers: [AppService, ReceiptCacheService],
})
export class AppModule {}
