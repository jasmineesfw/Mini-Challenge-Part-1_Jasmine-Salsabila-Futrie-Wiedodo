import { Test, TestingModule } from '@nestjs/testing';
import { Soal2KonversiSuhuController } from './soal2-konversi-suhu.controller';
import { Soal2KonversiSuhuService } from './soal2-konversi-suhu.service';

describe('Soal2KonversiSuhuController', () => {
  let controller: Soal2KonversiSuhuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Soal2KonversiSuhuController],
      providers: [Soal2KonversiSuhuService],
    }).compile();

    controller = module.get<Soal2KonversiSuhuController>(Soal2KonversiSuhuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
