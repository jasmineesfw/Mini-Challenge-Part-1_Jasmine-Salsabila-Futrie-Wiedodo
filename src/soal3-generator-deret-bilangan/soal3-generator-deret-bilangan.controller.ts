import { Controller, Get, Param, Query } from '@nestjs/common';
import { Soal3GeneratorDeretBilanganService } from './soal3-generator-deret-bilangan.service';

@Controller('soal3-generator-deret-bilangan')
export class Soal3GeneratorDeretBilanganController {
  constructor(private readonly soal3GeneratorDeretBilanganService: Soal3GeneratorDeretBilanganService) {}

  @Get(':jenis')
  deretBilangan(@Param('jenis') jenis: string, @Query('jumlah') jumlah: string, @Query('urutan') urutan?: string) {
    return this.soal3GeneratorDeretBilanganService.deretBilangan({ jenis, jumlah, urutan });
  }
}
