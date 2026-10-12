import { Test, TestingModule } from '@nestjs/testing';
import { Soal2KonversiSuhuService } from './soal2-konversi-suhu.service';

describe('Soal2KonversiSuhuService', () => {
  let service: Soal2KonversiSuhuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Soal2KonversiSuhuService],
    }).compile();

    service = module.get<Soal2KonversiSuhuService>(Soal2KonversiSuhuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
