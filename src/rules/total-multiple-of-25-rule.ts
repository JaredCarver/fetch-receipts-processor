import { ReceiptRule } from '../interfaces/receipt-rule.interface';
import { ReceiptInputDto } from '../dto/receipt-input.dto';

export class TotalMultipleOf25 implements ReceiptRule {
  //25 points if the total is a multiple of 0.25
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.total) {
      const total = parseFloat(receipt.total);
      // Check if the total is a multiple of 0.25
      if (total % 0.25 === 0) {
        return 25;
      }
    }
    return 0;
  }
}
