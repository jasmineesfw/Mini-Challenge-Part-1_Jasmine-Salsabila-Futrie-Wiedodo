import { Test, TestingModule } from '@nestjs/testing';
import { Soal3GeneratorDeretBilanganService } from './soal3-generator-deret-bilangan.service';

describe('Soal3GeneratorDeretBilanganService', () => {
  let service: Soal3GeneratorDeretBilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Soal3GeneratorDeretBilanganService],
    }).compile();

    service = module.get<Soal3GeneratorDeretBilanganService>(Soal3GeneratorDeretBilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
