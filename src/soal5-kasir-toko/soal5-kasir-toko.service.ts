import { BadRequestException, Injectable } from '@nestjs/common';
import { KasirTokoDto } from './dto/kasir-toko.dto';

@Injectable()
export class Soal5KasirTokoService {
    checkoutItem(memberInput: string, metodeInput: string, dto: KasirTokoDto) {
        // Member
        if (typeof memberInput !== 'string') {
            throw new BadRequestException('Member tidak valid');
        }

        const member = memberInput.toLowerCase();
        const memberValid = ['reguler', 'silver', 'gold'];

        if (!memberValid.includes(member)) {
            throw new BadRequestException('Member harus reguler, silver, atau gold');
        }

        // Metode
        if (!metodeInput || !['tunai', 'qris'].includes(metodeInput.toLowerCase())) {
            throw new BadRequestException('Metode wajib diisi dan harus tunai atau qris');
        }

        const metode = metodeInput.toLowerCase();

        // Dto
        if (!dto || !Array.isArray(dto.items)) {
            throw new BadRequestException('Items harus berupa array');
        }
        
        if (dto.items.length === 0) {
            throw new BadRequestException('Items tidak boleh kosong');
        }

        if (dto.items.length > 10) {
            throw new BadRequestException('Maksimal 10 item');
        }

        let subtotal = 0;
        let totalItem = 0;

        const rincian: {
            nama: string;
            harga: number;
            qty: number;
            subtotal: number;
        }[] = [];

        // Hitung setiap item
        for (let i = 0; i < dto.items.length; i++) {
            const item = dto.items[i];
            const nomor = i + 1;

        if (item === null || typeof item !== 'object' || Array.isArray(item)) {
            throw new BadRequestException(`Item ke-${nomor} harus berupa objek`);
        }

        if (typeof item.nama !== 'string' || item.nama.trim() === '') {
            throw new BadRequestException(`Item ke-${nomor}: nama tidak boleh kosong`);
        }

        if (typeof item.harga !== 'number' || !Number.isFinite(item.harga) || item.harga <= 0) {
            throw new BadRequestException(`Item ke-${nomor}: harga harus angka lebih dari 0`);
        }

        if (typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty <= 0) {
            throw new BadRequestException(`Item ke-${nomor}: qty harus bilangan bulat lebih dari 0`);
        }

        // Hitung subtotal tiap item
        const subtotalItem = item.harga * item.qty;

        rincian.push({
            nama: item.nama.trim(),
            harga: item.harga,
            qty: item.qty,
            subtotal: subtotalItem,
        });
        
        subtotal += subtotalItem;
        totalItem += item.qty;
        }

        // Menentukan persentase diskon member
        const diskonMember: Record<string, number> = {
            reguler: 0,
            silver: 5,
            gold: 10,
        };
        const persenDiskon = diskonMember[member];
        const diskon = subtotal * persenDiskon / 100;

        // Hitung biaya admin
        const biayaAdmin = metode === 'qris' ? (subtotal - diskon) * 0.01 : 0;

        // Hitung total bayar
        const total = subtotal - diskon + biayaAdmin;

        return {
            member: member,
            metode: metode,
            rincian: rincian,
            totalItem: totalItem,
            subtotal: subtotal,
            diskon: diskon,
            biayaAdmin: biayaAdmin,
            total: total,
        };
    }
}
