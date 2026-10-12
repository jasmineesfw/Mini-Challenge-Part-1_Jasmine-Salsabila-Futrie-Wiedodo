import { Module } from '@nestjs/common';
import { Soal4PenghitungNilaiRaporService } from './soal4-penghitung-nilai-rapor.service';
import { Soal4PenghitungNilaiRaporController } from './soal4-penghitung-nilai-rapor.controller';

@Module({
  controllers: [Soal4PenghitungNilaiRaporController],
  providers: [Soal4PenghitungNilaiRaporService],
})
export class Soal4PenghitungNilaiRaporModule {}
