import FormKontak from "@/components/FormKontak"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Kontak",
  description: "Hubungi Muhammad Mirza Aulia melalui form kontak, email, dan GitHub."
}

export default function Kontak() {
  return(
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-muted-foreground">Punya pertanyaan atau ingin bekerja sama? isi form berikut.</p>
      <div className="flex justify-center gap-4 mt-5 h-fit">
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak/>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Temukan Saya di</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a className="text-aksen hover:underline" href="https://github.com/muhammadmirzaaa212-dev">GitHub</a>
              </li>
              <li>
                <a className="text-aksen hover:underline" href="mailto:muhammadmirzaaa212@gmail.com">muhammadmirzaaa212@gmail.com</a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}