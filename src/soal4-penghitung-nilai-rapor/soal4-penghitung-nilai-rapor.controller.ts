import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Soal4PenghitungNilaiRaporService } from './soal4-penghitung-nilai-rapor.service';
import { PenghitungNilaiRaporDto } from './dto/penghitung-nilai-rapor.dto';

@Controller('soal4-penghitung-nilai-rapor')
export class Soal4PenghitungNilaiRaporController {
  constructor(private readonly soal4PenghitungNilaiRaporService: Soal4PenghitungNilaiRaporService) {}

  @Post('hitung')
  @HttpCode(200)
  penghitungNilaiRapor(@Body() dto: PenghitungNilaiRaporDto) {
    return this.soal4PenghitungNilaiRaporService.penghitungNilaiRapor(dto);
  }
}
