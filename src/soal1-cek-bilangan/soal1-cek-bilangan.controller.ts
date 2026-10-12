import { Controller, Get, Param } from '@nestjs/common';
import { Soal1CekBilanganService } from './soal1-cek-bilangan.service';

@Controller('soal1-cek-bilangan')
export class Soal1CekBilanganController {
  constructor(private readonly soal1CekBilanganService: Soal1CekBilanganService) {}

  @Get(':angka')
  cekBilangan(@Param('angka') angka: string) {
    return this.soal1CekBilanganService.cekBilangan(Number(angka));
  }
}
