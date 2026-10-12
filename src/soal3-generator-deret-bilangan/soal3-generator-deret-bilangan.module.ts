import { Module } from '@nestjs/common';
import { Soal3GeneratorDeretBilanganService } from './soal3-generator-deret-bilangan.service';
import { Soal3GeneratorDeretBilanganController } from './soal3-generator-deret-bilangan.controller';

@Module({
  controllers: [Soal3GeneratorDeretBilanganController],
  providers: [Soal3GeneratorDeretBilanganService],
})
export class Soal3GeneratorDeretBilanganModule {}
