import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsDescriptionMultipleOfThree implements ReceiptRule {
  //If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
  calculate(receipt: ReceiptInputDto): number {
    if (receipt.items) {
      let totalPoints = 0;
      // Iterate through each item in the receipt
      for (const item of receipt.items) {
        const trimmedDescription = item.shortDescription.trim();
        const descriptionLength = trimmedDescription.length;
        // Check if the trimmed length of the item description is a multiple of 3
        //console.log(
        //  `Description: ${trimmedDescription}, Length: ${descriptionLength}`,
        //);
        if (descriptionLength % 3 === 0) {
          const points = Math.ceil(Number(item.price) * 0.2);
          totalPoints += points;
        }
      }
      return totalPoints;
    }
    return 0;
  }
}
