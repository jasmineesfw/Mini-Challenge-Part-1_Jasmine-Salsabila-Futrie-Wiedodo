import { Module } from '@nestjs/common';
import { Soal5KasirTokoService } from './soal5-kasir-toko.service';
import { Soal5KasirTokoController } from './soal5-kasir-toko.controller';

@Module({
  controllers: [Soal5KasirTokoController],
  providers: [Soal5KasirTokoService],
})
export class Soal5KasirTokoModule {}
