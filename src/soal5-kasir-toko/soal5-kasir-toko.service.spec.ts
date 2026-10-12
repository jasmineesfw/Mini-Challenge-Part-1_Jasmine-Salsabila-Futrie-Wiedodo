import { Test, TestingModule } from '@nestjs/testing';
import { Soal5KasirTokoService } from './soal5-kasir-toko.service';

describe('Soal5KasirTokoService', () => {
  let service: Soal5KasirTokoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Soal5KasirTokoService],
    }).compile();

    service = module.get<Soal5KasirTokoService>(Soal5KasirTokoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
