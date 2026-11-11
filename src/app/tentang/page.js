import { SkillCard } from "@/components/SkillCard"
import Jadwal from "@/components/Jadwal";
import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Muhammad Mirza Aulia."
}

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

export default function Tentang() {
  return(
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Tentang Saya</h1>
      <Kartu judul="Perkenalan">
        <p className="text-primary font-medium">
          Saya adalah seorang siswa yang selalu penasaran pada cara kerja dunia terutama pada bidang teknologi dan sastra. Saya selalu ingin mengetahui sesuatu begitu dalam.
        </p>
      </Kartu>
      <div className="grid gap-4 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5">
            {hobies.map((hobi) => (
              <li key={hobi.id} className="text-primary font-medium mb-1">
                {hobi.nama}
              </li>
            ))}
          </ul>
        </Kartu>
        <Kartu judul="Cita-Cita">
          <div>
            <p className="text-primary mb-2">
              Saya bermimpi untuk menjadi <span className="font-semibold">Full Stack Developer</span>  serta menjadi <span className="font-semibold">penulis sukses</span> yang mampu menginspirasi orang lain. Karena itu saya ingin bisa:
            </p>
            <ol className="list-decimal pl-5">
              {rencana.map((plan) => (
                <li key={plan.id} className="text-primary font-medium">
                  {plan.nama}
                </li>
              ))}
            </ol>
          </div>
        </Kartu>
      </div>
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>
      <Kartu judul="Jadwal">
        <Jadwal jadwal={jadwal} />
      </Kartu>
    </main>
  )
}