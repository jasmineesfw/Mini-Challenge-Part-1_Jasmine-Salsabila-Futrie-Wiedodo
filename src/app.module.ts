import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Soal1CekBilanganModule } from './soal1-cek-bilangan/soal1-cek-bilangan.module';
import { Soal2KonversiSuhuModule } from './soal2-konversi-suhu/soal2-konversi-suhu.module';
import { Soal3GeneratorDeretBilanganModule } from './soal3-generator-deret-bilangan/soal3-generator-deret-bilangan.module';
import { Soal4PenghitungNilaiRaporModule } from './soal4-penghitung-nilai-rapor/soal4-penghitung-nilai-rapor.module';
import { Soal5KasirTokoModule } from './soal5-kasir-toko/soal5-kasir-toko.module';

@Module({
  imports: [Soal1CekBilanganModule, Soal2KonversiSuhuModule, Soal3GeneratorDeretBilanganModule, Soal4PenghitungNilaiRaporModule, Soal5KasirTokoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
