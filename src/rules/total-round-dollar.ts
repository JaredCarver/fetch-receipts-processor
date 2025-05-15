import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

export class TotalRoundDollar implements ReceiptRule {
  //50 points if the total is a round dollar amount with no cents.
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.total) {
      const total = parseFloat(receipt.total);
      // Check if the total is a round dollar amount
      if (Number.isInteger(total)) {
        return 50;
      }
    }
    return 0;
  }
}
