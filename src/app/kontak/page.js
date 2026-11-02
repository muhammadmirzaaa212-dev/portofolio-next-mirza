export const metadata = {
  title: "Kontak",
  description: "Hubungi Muhammad Mirza Aulia melalui form kontak, email, dan GitHub."
}

export default function Kontak() {
  return(
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700">Punya pertanyaan atau ingin bekerja sama? isi form berikut.</p>
      <div className="flex justify-center gap-4 mt-5 h-fit">
        <form className="space-y-4 p-4 rounded-lg bg-white border border-gray-200 min-w-lg">
          <div>
            <label htmlFor="nama" className="block font-semibold">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Contoh: Budi Santoso"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="nama@gmail.com"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
            />
          </div>
          <div>
            <label htmlFor="nomor" className="block font-semibold">
              Nomor HP
            </label>
            <input
              type="text"
              id="nomor"
              name="nomor"
              placeholder="081234567890"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
            />
          </div>
          <div>
            <label htmlFor="keperluan" className="block font-semibold">
              Keperluan
            </label>
            <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2">
              <option>-- Pilih keperluan --</option>
              <option>Kolaborasi</option>
              <option>Tanya Jawab</option>
              <option>Masukan dan Saran</option>
            </select>
          </div>
          <div>
            <label htmlFor="pesan" className="block font-semibold">
              Pesan
            </label>
            <textarea
              placeholder="Tulis pesanmu disini"
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
            />
          </div>
          <div>
            <button className="px-4 py-2 rounded-lg text-white bg-aksen text-sm font-medium">Kirim Pesan</button>
          </div>
        </form>
        <form className="space-y-3 p-4 rounded-lg bg-white border border-gray-200 h-full">
          <p className="text-3xl font-bold text-utama md:text-2xl">Temukan Saya di</p>
          <div className="flex flex-col text-start gap-1">
            <a className="text-aksen hover:underline" href="">GitHub</a>
            <a className="text-aksen hover:underline" href="">muhammadmirzaaa212@gmail.com</a>
          </div>
        </form>
      </div>
    </main>
  )
}