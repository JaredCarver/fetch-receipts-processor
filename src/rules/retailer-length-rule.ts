import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

export class RetailerLengthRule implements ReceiptRule {
  //One point for every alphanumeric character in the retailer name.
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.retailer) {
      const alphanumericChars = receipt.retailer.match(/[a-zA-Z0-9]/g);
      return alphanumericChars ? alphanumericChars.length : 0;
    } else {
      return 0;
    }
  }
}
