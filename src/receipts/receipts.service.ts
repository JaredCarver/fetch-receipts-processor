import { Injectable } from '@nestjs/common';
import { ReceiptCacheService } from '../receipt-cache/receipt-cache.service';
import { UUID } from 'crypto';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';
import { ReceiptCalculatorService } from './receipt-calculator.service';

@Injectable()
export class ReceiptsService {
  constructor(
    private readonly receiptCacheService: ReceiptCacheService,
    private readonly receiptCalculator: ReceiptCalculatorService,
  ) {}
  getReceiptById(id: UUID): any {
    // Check if the receipt is in the cache
    const cachedReceipt = this.receiptCacheService.getReceipt(id);
    if (cachedReceipt) {
      return cachedReceipt;
    } else {
      // If not in cache, just return a message
      return `Receipt with ID ${id} not found.`;
    }
  }

  // Again, normally I wouldn't have this method due to security and blah blah blah, but for the sake of debugging and adding in some extra functionality, it's in here
  getAllReceipts(): Map<UUID, number> {
    // Get all receipts from the cache
    const allReceipts = this.receiptCacheService.getAllReceipts();
    console.log('All Receipts:', allReceipts);
    return allReceipts;
  }

  processReceipt(receipt: ReceiptInputDto): UUID {
    const reciptId = crypto.randomUUID();
    const points = this.receiptCalculator.calculateTotalPoints(receipt);
    // Store the receipt in the cache
    console.log(`Receipt ID: ${reciptId}, Points: ${points}`);
    return this.receiptCacheService.setReceipt(reciptId, points);
  }
}
