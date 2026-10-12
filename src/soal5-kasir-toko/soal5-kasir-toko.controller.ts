import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { Soal5KasirTokoService } from './soal5-kasir-toko.service';
import { KasirTokoDto } from './dto/kasir-toko.dto';

@Controller('soal5-kasir-toko')
export class Soal5KasirTokoController {
  constructor(private readonly soal5KasirTokoService: Soal5KasirTokoService) {}

  @Post('checkout/:member')
  checkoutItem(@Param('member') member: string, @Query('metode') metode: string, @Body() dto: KasirTokoDto) {
    return this.soal5KasirTokoService.checkoutItem(member, metode, dto);
  }
}
