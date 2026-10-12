import { Test, TestingModule } from '@nestjs/testing';
import { Soal4PenghitungNilaiRaporController } from './soal4-penghitung-nilai-rapor.controller';
import { Soal4PenghitungNilaiRaporService } from './soal4-penghitung-nilai-rapor.service';

describe('Soal4PenghitungNilaiRaporController', () => {
  let controller: Soal4PenghitungNilaiRaporController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Soal4PenghitungNilaiRaporController],
      providers: [Soal4PenghitungNilaiRaporService],
    }).compile();

    controller = module.get<Soal4PenghitungNilaiRaporController>(Soal4PenghitungNilaiRaporController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
