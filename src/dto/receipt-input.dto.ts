/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsDate,
  IsNumberString,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiptInputDto {
  @IsString()
  @Matches(/^[\w\s\-&]+$/) // Allow letters, numbers, spaces, hyphens, and ampersands
  retailer: string;

  @Type(() => Date)
  @IsDate()
  purchaseDate: string;

  @Matches(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/) // Matches HH:MM format
  purchaseTime: string;

  @IsNumberString()
  @Matches(/^\d+\.\d{2}$/) // Matches a number with two decimal places
  total: string;

  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}

class ItemDto {
  @IsString()
  @Matches(/^[\w\s-]+$/) // Allow letters, numbers, spaces, and hyphens
  shortDescription: string;

  @IsNumberString()
  @Matches(/^\d+\.\d{2}$/) // Matches a number with two decimal places
  price: string;
}
