import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { UUID } from 'crypto';
import { ReceiptInputDto } from 'src/dto/receipt-input.dto';

@Controller('receipts')
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}
  //Normally we wouldn't have the ability to get a list of all receipts unless we were behind some security, but for the sake of debugging and showing off some work
  //I'm putting it in here
  @Get()
  getAllReceipts() {
    // Logic to get all receipts
    const allReceipts = this.receiptsService.getAllReceipts();
    console.log('All Receipts (Controller):', allReceipts);
    return Array.from(allReceipts.entries());
  }

  @Get(':id/points')
  getReceiptPoints(@Param('id', new ParseUUIDPipe()) id: UUID) {
    // Logic to get points for a specific receipt
    return `Points for the receipt ${id}: ${this.receiptsService.getReceiptById(id)}`;
  }

  @Post('process')
  processReceipt(@Body(ValidationPipe) input: ReceiptInputDto) {
    // Logic to process a receipt
    return this.receiptsService.processReceipt(input);
  }
}
