import { Injectable } from '@nestjs/common';
import { ReceiptCacheService } from '../receipt-cache/receipt-cache.service';
import { UUID } from 'crypto';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

@Injectable()
export class ReceiptsService {
  constructor(private readonly receiptCacheService: ReceiptCacheService) {}

  getReceiptById(id: UUID): any {
    // Check if the receipt is in the cache
    const cachedReceipt = this.receiptCacheService.getReceipt(id);
    if (cachedReceipt) {
      return cachedReceipt;
    }
  }

  getAllReceipts(): Map<UUID, number> {
    // Get all receipts from the cache
    const allReceipts = this.receiptCacheService.getAllReceipts();
    console.log('All Receipts:', allReceipts);
    return allReceipts;
  }

  processReceipt(receipt: ReceiptInputDto): UUID {
    const reciptId = crypto.randomUUID();
    const pointsTemp = Math.floor(Math.random() * 100); // Simulate points calculation
    // Store the receipt in the cache
    console.log(`Receipt ID: ${reciptId}, Points: ${pointsTemp}`);
    if (Number(receipt.total) < 0) {
      return reciptId;
    }
    return this.receiptCacheService.setReceipt(reciptId, pointsTemp);
  }
}
