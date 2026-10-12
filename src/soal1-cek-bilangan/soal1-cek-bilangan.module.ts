import { Module } from '@nestjs/common';
import { Soal1CekBilanganService } from './soal1-cek-bilangan.service';
import { Soal1CekBilanganController } from './soal1-cek-bilangan.controller';

@Module({
  controllers: [Soal1CekBilanganController],
  providers: [Soal1CekBilanganService],
})
export class Soal1CekBilanganModule {}
