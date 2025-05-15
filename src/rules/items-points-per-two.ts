import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

export class ItemsPointsPerTwo implements ReceiptRule {
  //5 points for every two items on the receipt.
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.items && receipt.items.length > 0) {
      const itemCount = receipt.items.length;
      // Calculate points based on the number of items
      return Math.floor(itemCount / 2) * 5;
    }
    return 0;
  }
}
