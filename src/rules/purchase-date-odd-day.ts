import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

export class PurcahseDateOddDay implements ReceiptRule {
  //6 points if the day in the purchase date is odd.
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.purchaseDate) {
      const purchaseDate = new Date(receipt.purchaseDate);
      //console.log('Purchase Date:', purchaseDate);
      //console.log('Day:', day);
      // Check if the day is odd
      if (purchaseDate.getUTCDate() % 2 !== 0) {
        return 6;
      }
    }
    return 0;
  }
}
