import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

export class PurcahseDateOddDay implements ReceiptRule {
  //6 points if the day in the purchase date is odd.
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.purchaseDate) {
      const purchaseDate = new Date(receipt.purchaseDate);
      const day = purchaseDate.getUTCDate(); //Make sure to use getUTCDate() to get the day of the month in UTC otherwise it will be the local time of the server, which may not be the same as the time zone of the purchase date.
      //console.log('Purchase Date:', purchaseDate);
      //console.log('Day:', day);
      // Check if the day is odd
      if (day % 2 !== 0) {
        return 6;
      }
    }
    return 0;
  }
}
