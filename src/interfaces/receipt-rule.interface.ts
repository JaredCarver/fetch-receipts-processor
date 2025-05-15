import { ReceiptInputDto } from 'src/dto/receipt-input.dto';
export interface ReceiptRule {
  calculate(receipt: ReceiptInputDto): number;
}
