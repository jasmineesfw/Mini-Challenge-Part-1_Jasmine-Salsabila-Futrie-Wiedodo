import { Test, TestingModule } from '@nestjs/testing';
import { Soal4PenghitungNilaiRaporService } from './soal4-penghitung-nilai-rapor.service';

describe('Soal4PenghitungNilaiRaporService', () => {
  let service: Soal4PenghitungNilaiRaporService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Soal4PenghitungNilaiRaporService],
    }).compile();

    service = module.get<Soal4PenghitungNilaiRaporService>(Soal4PenghitungNilaiRaporService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
