import {
  IsDate,
  IsNumberString,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiptInputDto {
  //None of these messages are going to be displayed because I've overridden the default error messages in the main.ts file
  //This was done to match the spec sheet, however, I think normally I would expose these to vendor so they could understand why
  //their receipt was invalid

  @IsString()
  @Matches(/^[\w\s\-&]+$/, {
    message:
      'The retailer name can only contain letters, numbers, spaces, hyphens, and ampersands',
  }) // Allow letters, numbers, spaces, hyphens, and ampersands
  retailer: string;

  @Type(() => Date)
  @IsDate({
    message: 'The purchase date must be a valid date',
  })
  purchaseDate: string;

  @Matches(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/, {
    message: 'The purchase time must be in HH:MM format, 24-hour format',
  }) // Matches HH:MM format
  purchaseTime: string;

  @IsNumberString()
  @Matches(/^\d+\.\d{2}$/, {
    message: 'The total must be a valid, positive number',
  }) // Matches a postive number with two decimal places
  total: string;

  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}

class ItemDto {
  @IsString()
  @Matches(/^[\w\s-]+$/, {
    message:
      'The short description can only contain letters, numbers, spaces, and hyphens',
  }) // Allow letters, numbers, spaces, and hyphens
  shortDescription: string;

  @IsNumberString()
  @Matches(/^\d+\.\d{2}$/, {
    message: 'All item totals must be a valid, positive number',
  }) // Matches a positive number with two decimal places
  price: string;
  description: any;
}
