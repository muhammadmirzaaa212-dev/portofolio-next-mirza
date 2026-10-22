import { Hero } from "@/components/Hero"
import { SkillCard } from "@/components/SkillCard"
import Kartu from "@/components/Kartu";

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
];

const rencana = [
  { id: 1, nama: "Berhasil membuat platform yang baik." },
  { id: 2, nama: "Membuat platform tersebut bisa berguna dan membantu orang lain." },
  { id: 3, nama: "Berhasil mencapai tujuan seperti penerbitan buku." },
];

const jadwal = [];

export default function Home() {
  return(
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-5">
      <Hero 
        nama="Muhammad Mirza Aulia" 
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG" 
      />
      
      <Kartu 
        judul="Tentang Saya" 
        children={(
          <p className="text-utama font-medium">
            Saya adalah seorang siswa yang selalu penasaran pada cara kerja dunia terutama pada bidang teknologi dan sastra. Saya selalu ingin mengetahui sesuatu begitu dalam.
          </p>
        )} 
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Kartu 
          judul="Hobi" 
          children={(
            <ul className="list-disc pl-5">
              {hobies.map((hobi) => (
                <li key={hobi.id} className="text-utama font-medium">
                  {hobi.nama}
                </li>
              ))}
            </ul>
          )} 
        />
        <Kartu 
          judul="Cita-Cita" 
          children={(
            <div>
              <p className="text-utama">
                Saya bermimpi untuk menjadi <span className="font-semibold">Full Stack Developer</span>  serta menjadi <span className="font-semibold">penulis sukses</span> yang mampu menginspirasi orang lain.
              </p>
              <ol className="list-decimal pl-5">
                {rencana.map((plan) => (
                  <li key={plan.id} className="text-utama font-medium">
                    {plan.nama}
                  </li>
                ))}
              </ol>
            </div>
          )} 
        />
      </div>
      <Kartu 
        judul="Keahlian" 
        children={(
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        )} 
      />
    </main>
  )
}