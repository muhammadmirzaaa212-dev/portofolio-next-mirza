import Link from "next/link"

export default function NotFound() {
  return(
    <main className="flex flex-1 flex-col gap-4 items-center justify-center text-center">
      <h1 className="text-6xl text-aksen font-bold">404</h1>
      <div className="space-y-2 text-utama">
        <h2 className="font-semibold text-2xl">Halaman tidak ditemukan</h2>
        <h3>Alamat yang kamu buka tidak ada atau sudah dipisahkan</h3>
      </div>
      <Link href="/">
        <button className="px-6 py-2 rounded-lg bg-utama text-white cursor-pointer">Kembali Ke Beranda</button>
      </Link>
    </main>
  )
}