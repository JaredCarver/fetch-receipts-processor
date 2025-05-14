import { Controller, Get } from '@nestjs/common';

@Controller('receipts')
export class ReceiptsController {
  //Normally we wouldn't have the ability to get a list of all receipts unless we were behind some security, but for the sake of debugging and showing off some work
  //we'll keep it in here
  @Get()
  getAllReceipts() {
    // Logic to get all receipts
    return 'List of all receipts';
  }
}
