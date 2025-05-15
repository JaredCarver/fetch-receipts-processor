import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

export class PurchaseTimeHappyHour implements ReceiptRule {
  //10 points if the time of purchase is after 2:00pm and before 4:00pm.
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.purchaseTime) {
      const hours = parseInt(receipt.purchaseTime.split(':')[0], 10);
      const minutes = parseInt(receipt.purchaseTime.split(':')[1], 10);
      // Check if the time is after 2:00pm and before 4:00pm
      if ((hours === 14 && minutes >= 0) || (hours === 15 && minutes < 60)) {
        return 10;
      }
    }
    return 0;
  }
}
