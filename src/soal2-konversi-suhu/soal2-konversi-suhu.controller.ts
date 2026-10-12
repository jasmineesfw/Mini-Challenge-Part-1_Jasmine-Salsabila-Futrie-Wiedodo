import { Controller, Get, Query } from '@nestjs/common';
import { Soal2KonversiSuhuService } from './soal2-konversi-suhu.service';
import { KonversiSuhuDto } from './dto/konversi-suhu.dto';

@Controller('soal2-konversi-suhu')
export class Soal2KonversiSuhuController {
  constructor(private readonly soal2KonversiSuhuService: Soal2KonversiSuhuService) {}

  @Get('konversi')
  konversiSuhu(@Query('nilai') nilai: string, @Query('dari') dari: string, @Query('ke') ke: string) {
    const dto: KonversiSuhuDto = { nilai, dari, ke };
    return this.soal2KonversiSuhuService.konversiSuhu(dto);
  }
}