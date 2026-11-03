import FormKontak from "@/components/FormKontak"

export const metadata = {
  title: "Kontak",
  description: "Hubungi Muhammad Mirza Aulia melalui form kontak, email, dan GitHub."
}

export default function Kontak() {
  return(
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">Punya pertanyaan atau ingin bekerja sama? isi form berikut.</p>
      <div className="flex justify-center gap-4 mt-5 h-fit">
        <FormKontak/>
        <form className="space-y-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-full">
          <p className="text-3xl font-bold text-utama dark:text-sky-200 md:text-2xl">Temukan Saya di</p>
          <div className="flex flex-col text-start gap-1">
            <a className="text-aksen dark:text-red-300 hover:underline" href="">GitHub</a>
            <a className="text-aksen dark:text-red-300 hover:underline" href="">muhammadmirzaaa212@gmail.com</a>
          </div>
        </form>
      </div>
    </main>
  )
}