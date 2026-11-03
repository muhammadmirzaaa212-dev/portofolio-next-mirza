import { Hero } from "@/components/Hero"
import { SkillCard } from "@/components/SkillCard"
import { proyek } from "@/data/proyek";
import ProyekCard from "@/components/ProyekCard";
import Link from "next/link";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobies = [
  { id: 1, nama: "Membaca buku" },
  { id: 2, nama: "Mengeksplore hal baru" },
  { id: 3, nama: "Menulis dan mengarang sebuah cerita" },
  { id: 4, nama: "Mencari sesuatu yang menarik" },
];

const rencana = [
  { id: 1, nama: "Berhasil membuat platform yang baik." },
  { id: 2, nama: "Membuat platform tersebut bisa berguna dan membantu orang lain." },
  { id: 3, nama: "Berhasil mencapai tujuan seperti penerbitan buku." },
];

const jadwal = [
  { id: 1, hari: "Kamis", waktu: "10.00 - 13.30", kegiatan: "Membaca modul KI dan mulai membuat catatan materi dari modul." },
  { id: 2, hari: "Jum'at", waktu: "19.00 - 20.30", kegiatan: "Memulai setup tugas dari modul." },
  { id: 3, hari: "Minggu", waktu: "12.30 - 17.30", kegiatan: "Melanjutkan mengerjakan tugas dari modul." },
  { id: 4, hari: "Senin", waktu: "19.00 - 21.00", kegiatan: "Melanjutkan mengerjakan tugas dari modul (apabila masih belum selesai)" },
  { id: 5, hari: "Selasa", waktu: "07.30 - 11.30", kegiatan: "Mengeksplore kembali tugas dari modul, serta melanjutkan tugas dari modul." },
  { id: 6, hari: "Selasa", waktu: "20.00 - 22.30", kegiatan: "Record untuk laporan, mengedit presentasi, serta upload YouTube" }
];

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return(
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-10">
      <Hero 
        nama="Muhammad Mirza Aulia" 
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG" 
      />
      <section>
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link href="/proyek">
          <button className="mt-4 px-6 py-2 rounded-lg bg-utama text-white">Lihat Semua Proyek</button>
        </Link>
      </section>
    </main>
  )
}