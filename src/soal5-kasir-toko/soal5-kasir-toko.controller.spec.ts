import { Test, TestingModule } from '@nestjs/testing';
import { Soal5KasirTokoController } from './soal5-kasir-toko.controller';
import { Soal5KasirTokoService } from './soal5-kasir-toko.service';

describe('Soal5KasirTokoController', () => {
  let controller: Soal5KasirTokoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Soal5KasirTokoController],
      providers: [Soal5KasirTokoService],
    }).compile();

    controller = module.get<Soal5KasirTokoController>(Soal5KasirTokoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
