import { Test, TestingModule } from '@nestjs/testing';
import { Soal3GeneratorDeretBilanganController } from './soal3-generator-deret-bilangan.controller';
import { Soal3GeneratorDeretBilanganService } from './soal3-generator-deret-bilangan.service';

describe('Soal3GeneratorDeretBilanganController', () => {
  let controller: Soal3GeneratorDeretBilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Soal3GeneratorDeretBilanganController],
      providers: [Soal3GeneratorDeretBilanganService],
    }).compile();

    controller = module.get<Soal3GeneratorDeretBilanganController>(Soal3GeneratorDeretBilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
