import { BadRequestException, Injectable } from '@nestjs/common';
import { GeneratorDeretBilanganDto } from './dto/generator-deret-bilangan.dto';

@Injectable()
export class Soal3GeneratorDeretBilanganService {
    deretBilangan(dto: GeneratorDeretBilanganDto) {
        const { jenis, jumlah, urutan } = dto;

        // Jenis
        const jenisValid = ['ganjil', 'genap', 'kuadrat'];
        if (!jenisValid.includes(jenis)) {
            throw new BadRequestException('Jenis harus ganjil, genap, atau kuadrat');
        }

        // Jumlah
        if (jumlah === undefined || jumlah.trim() === '') {
            throw new BadRequestException('Query jumlah wajib diisi');
        }
        const banyak = Number(jumlah);
        if (!Number.isInteger(banyak) || banyak < 1 || banyak > 20) {
            throw new BadRequestException('Jumlah harus bilangan bulat antara 1 sampai 20');
        }

        // Urutan (tantangan)
        const arah = urutan ?? 'asc';
        if (arah !== 'asc' && arah !== 'desc') {
            throw new BadRequestException('Urutan harus asc atau desc');
        }
        const data: number[] = [];
        let total = 0;
        
        // Membuat deret
        for (let i = 1; i <= banyak; i++) {
            let nilai: number;
            if (jenis === 'ganjil') {
                nilai = 2 * i - 1;
            } else if (jenis === 'genap') {
                nilai = 2 * i;
            } else {
                nilai = i * i;
            }
            data.push(nilai);
            total += nilai;
        }

        // Membalik urutan jika descending
        if (arah === 'desc') {
            data.reverse();
        }
        
        return {
            jenis: jenis,
            jumlah: banyak,
            data: data,
            total: total
        };
    }
}
