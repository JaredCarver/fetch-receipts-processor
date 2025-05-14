import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptCacheService } from './receipt-cache.service';

describe('ReceiptCacheService', () => {
  let service: ReceiptCacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiptCacheService],
    }).compile();

    service = module.get<ReceiptCacheService>(ReceiptCacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
