import { BadRequestException, Injectable } from '@nestjs/common';
import { PenghitungNilaiRaporDto } from './dto/penghitung-nilai-rapor.dto';

@Injectable()
export class Soal4PenghitungNilaiRaporService {
    penghitungNilaiRapor(dto: PenghitungNilaiRaporDto) {
        const { nama, tugas, uts, uas } = dto;

        // Nama
        if (typeof nama !== 'string' || nama.trim() === '') {
            throw new BadRequestException('Nama harus berupa string dan tidak boleh kosong');
        }

        // Tugas
         if (!Array.isArray(tugas) || tugas.length < 1) {
            throw new BadRequestException('Tugas harus berupa array minimal 1 angka');
        }

        for (let i = 0; i < tugas.length; i++) {
            if (typeof tugas[i] !== 'number' || !Number.isFinite(tugas[i]) || tugas[i] < 0 || tugas[i] > 100) {
                throw new BadRequestException(`Nilai tugas ke-${i + 1} harus angka antara 0 sampai 100`);
            }
        }

        // UTS
        if (typeof uts !== 'number' || !Number.isFinite(uts) || uts < 0 || uts > 100) {
            throw new BadRequestException('UTS harus angka antara 0 sampai 100');
        }
        
        // UAS
        if (typeof uas !== 'number' || !Number.isFinite(uas) || uas < 0 || uas > 100) {
            throw new BadRequestException('UAS harus angka antara 0 sampai 100');
        }

        // Hitung rata-rata tugas
        const jumlahTugas = tugas.reduce((total, nilai) => total + nilai, 0);
        const rataTugas = jumlahTugas / tugas.length;

        // Hitung nilai akhir
        const nilaiAkhir = Math.round((rataTugas * 0.3 + uts * 0.3 + uas * 0.4) * 100) / 100;
        
        // Predikat
        let predikat: string;

        if (nilaiAkhir >= 90) {
            predikat = 'A';
        } else if (nilaiAkhir >= 80) {
            predikat = 'B';
        } else if (nilaiAkhir >= 70) {
            predikat = 'C';
        } else {
            predikat = 'D';
        }

        // Status
        const status = nilaiAkhir >= 75 ? 'Lulus' : 'Remedial';
        
        return {
            nama: nama.trim(),
            rataTugas: rataTugas,
            nilaiAkhir: nilaiAkhir,
            predikat: predikat,
            status: status,
        };
    }
}
