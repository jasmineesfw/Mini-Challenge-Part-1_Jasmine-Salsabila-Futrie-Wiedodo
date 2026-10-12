import { Test, TestingModule } from '@nestjs/testing';
import { Soal1CekBilanganController } from './soal1-cek-bilangan.controller';
import { Soal1CekBilanganService } from './soal1-cek-bilangan.service';

describe('Soal1CekBilanganController', () => {
  let controller: Soal1CekBilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Soal1CekBilanganController],
      providers: [Soal1CekBilanganService],
    }).compile();

    controller = module.get<Soal1CekBilanganController>(Soal1CekBilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
