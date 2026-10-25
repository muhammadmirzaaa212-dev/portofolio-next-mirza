export default function Footer() {
  const tahun = new Date().getFullYear()

  return(
    <footer className="py-5 w-full mt-auto bg-utama">
      <p className="text-center text-white">&copy; {tahun} Muhammad Mirza Aulia | Dibuat dengan Next.js | Kelas Indutri UBIG</p>
    </footer>
  )
}