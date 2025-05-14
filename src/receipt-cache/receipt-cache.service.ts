import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

@Injectable()
export class ReceiptCacheService {
  private receiptCache: Map<UUID, number> = new Map();
  //Set up some utility methods to manage the cache
  //Realistically, most of these would check a cache first most likely, then end up grabbing from a database and then setting the cache,
  //Given that DB wasn't a requirement for this, we'll just keep this in memory

  // Set a receipt in the cache
  setReceipt(receiptId: UUID, receipt: number): UUID {
    this.receiptCache.set(receiptId, receipt);
    return receiptId;
  }

  // Get a single receipt from the cache
  getReceipt(receiptId: UUID): number | undefined {
    return this.receiptCache.get(receiptId);
  }

  getAllReceipts(): Map<UUID, number> {
    return this.receiptCache;
  }

  // Check if a receipt exists in the cache
  hasReceipt(receiptId: UUID): boolean {
    return this.receiptCache.has(receiptId);
  }

  //Delete a single receipt from the cache
  deleteReceipt(receiptId: UUID): void {
    this.receiptCache.delete(receiptId);
  }

  //Clear the entire cache
  clearCache(): void {
    this.receiptCache.clear();
  }
}
