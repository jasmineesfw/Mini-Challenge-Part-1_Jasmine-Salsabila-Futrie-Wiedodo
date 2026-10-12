import { Module } from '@nestjs/common';
import { Soal2KonversiSuhuService } from './soal2-konversi-suhu.service';
import { Soal2KonversiSuhuController } from './soal2-konversi-suhu.controller';

@Module({
  controllers: [Soal2KonversiSuhuController],
  providers: [Soal2KonversiSuhuService],
})
export class Soal2KonversiSuhuModule {}
