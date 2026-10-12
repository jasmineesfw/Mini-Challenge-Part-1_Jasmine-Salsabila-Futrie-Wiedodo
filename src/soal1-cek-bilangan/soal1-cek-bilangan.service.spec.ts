import { Test, TestingModule } from '@nestjs/testing';
import { Soal1CekBilanganService } from './soal1-cek-bilangan.service';

describe('Soal1CekBilanganService', () => {
  let service: Soal1CekBilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Soal1CekBilanganService],
    }).compile();

    service = module.get<Soal1CekBilanganService>(Soal1CekBilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
