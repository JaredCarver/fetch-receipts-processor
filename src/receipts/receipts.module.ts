import { Module } from '@nestjs/common';
import { ReceiptsController } from './receipts.controller';
import { ReceiptsService } from './receipts.service';
import { ReceiptCacheService } from 'src/receipt-cache/receipt-cache.service';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService, ReceiptCacheService],
})
export class ReceiptsModule {}
