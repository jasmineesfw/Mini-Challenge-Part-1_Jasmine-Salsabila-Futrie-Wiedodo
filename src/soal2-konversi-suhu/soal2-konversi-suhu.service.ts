import { BadRequestException, Injectable } from '@nestjs/common';
import { KonversiSuhuDto } from './dto/konversi-suhu.dto';

// Function konversi suhu
function keCelsius(nilai: number, dari: string): number {
    if (dari === 'fahrenheit') return (nilai - 32) * 5 / 9;
    if (dari === 'kelvin') return nilai - 273.15;
    return nilai;
}

function dariCelsius(nilai: number, ke: string): number {
    if (ke === 'fahrenheit') return nilai * 9 / 5 + 32;
    if (ke === 'kelvin') return nilai + 273.15;
    return nilai;
}

@Injectable()
export class Soal2KonversiSuhuService {
    konversiSuhu(dto: KonversiSuhuDto) {
        const { nilai, dari, ke } = dto;

        // Validasi input
        if (nilai === undefined || nilai.trim() === '' || dari === undefined || ke === undefined) {
            throw new BadRequestException('Semua parameter wajib diisi');
        }

        // Validasi angka
        const angka = Number(nilai);
        if (!Number.isFinite(angka)) {
            throw new BadRequestException('Nilai suhu harus berupa angka');
        }

        // Validasi satuan
        const satuan = ['celsius', 'fahrenheit', 'kelvin'];
        if (!satuan.includes(dari) || !satuan.includes(ke)) {
            throw new BadRequestException('Satuan harus celsius, fahrenheit, atau kelvin');
        }

        if (dari === ke) {
            throw new BadRequestException('Satuan asal dan tujuan tidak boleh sama');
        }

        if (dari === 'kelvin' && angka < 0) {
            throw new BadRequestException('Suhu Kelvin tidak boleh negatif');
        }

        // Konversi menggunakan function
        const celsius = keCelsius(angka, dari);
        const hasilMentah = dariCelsius(celsius, ke);

        // Pembulatan
        const hasil = Math.round((hasilMentah + Number.EPSILON) * 100) / 100;

        return {
            nilaiAsal: angka,
            satuanAsal: dari,
            hasil,
            satuanHasil: ke,
        };
    }
}
