import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class Soal1CekBilanganService {
    cekBilangan(angka: number) {
        if (!Number.isInteger(angka) || angka < 1 || angka > 100) {
            throw new BadRequestException('Angka harus bilangan bulat antara 1 sampai 100');
        }
        const jenis = angka % 2 === 0 ? 'Genap' : 'Ganjil';
        const kuadrat = angka * angka;
        const kelipatanLima = angka % 5 === 0;
        const result = {
            angka: angka,
            jenis: jenis,
            kuadrat: kuadrat,
            kelipatanLima: kelipatanLima
        };
        return result;
    }
}
