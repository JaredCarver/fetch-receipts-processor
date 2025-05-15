import { Injectable } from '@nestjs/common';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';
import { ReceiptRule } from 'src/interfaces/receipt-rule.interface';
//Rules
import { TotalRoundDollar } from 'src/rules/total-round-dollar';
import { TotalMultipleOf25 } from 'src/rules/total-multiple-of-25-rule';
import { RetailerLengthRule } from 'src/rules/retailer-length-rule';
import { PurchaseTimeHappyHour } from 'src/rules/purchase-time-happy-hour';
import { PurcahseDateOddDay } from 'src/rules/purchase-date-odd-day';
import { ItemsPointsPerTwo } from 'src/rules/items-points-per-two';
import { ItemsDescriptionMultipleOfThree } from 'src/rules/items-description-multiple-of-three';

@Injectable()
export class ReceiptCalculatorService {
  private rules: ReceiptRule[] = [
    new RetailerLengthRule(),
    new TotalRoundDollar(),
    new TotalMultipleOf25(),
    new ItemsPointsPerTwo(),
    new ItemsDescriptionMultipleOfThree(),
    new PurchaseTimeHappyHour(),
    new PurcahseDateOddDay(),
  ];

  //Calculate the total points based on the rules
  //This method iterates through each rule and applies it to the receipt, summing up the points earned.
  //The rules are applied in the order they are defined in the rules array. (Which is how you guys put it in the Rules section, shouldn't matter, but just in case we ever want to add a heirarchy to the rules)
  calculateTotalPoints(receipt: ReceiptInputDto): number {
    let totalPoints = 0;
    for (const rule of this.rules) {
      const itemAmount = rule.calculate(receipt);
      //console.log(`Rule: ${rule.constructor.name}, Points: ${itemAmount}`);
      totalPoints += itemAmount;
    }
    //console.log(`Total Points: ${totalPoints}`);
    // Limit the total points to a maximum of 10,000 to prevent abuse of the system
    //if (totalPoints > 10000) {
    //  totalPoints = 10000;
    //}
    return totalPoints;
  }
}
