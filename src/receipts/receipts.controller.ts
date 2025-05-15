import {
  Body,
  Controller,
  Delete,
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
    return { points: this.receiptsService.getReceiptById(id) }; // Return points with "points" key
  }

  @Post('process')
  processReceipt(@Body(ValidationPipe) input: ReceiptInputDto) {
    // Logic to process a receipt
    return { id: this.receiptsService.processReceipt(input) }; // Return the receipt ID with "id" key
  }

  //These weren't requested, but I added them for the sake of debugging and just generally being on a roll
  @Delete()
  clearAllReceipts() {
    // Logic to clear all receipts
    this.receiptsService.clearAllReceipts();
    return { message: 'All receipts cleared' };
  }

  @Delete(':id')
  deleteReceiptById(@Param('id', new ParseUUIDPipe()) id: UUID) {
    // Logic to delete a specific receipt
    this.receiptsService.deleteReceiptById(id);
    return { message: `Receipt with ID ${id} deleted` };
  }
}
