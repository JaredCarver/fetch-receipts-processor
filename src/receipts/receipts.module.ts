import { Module } from '@nestjs/common';
import { ReceiptsController } from './receipts.controller';
import { ReceiptsService } from './receipts.service';
import { ReceiptCacheService } from 'src/receipt-cache/receipt-cache.service';
import { ReceiptCalculatorService } from './receipt-calculator.service';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService, ReceiptCacheService, ReceiptCalculatorService],
})
export class ReceiptsModule {}
