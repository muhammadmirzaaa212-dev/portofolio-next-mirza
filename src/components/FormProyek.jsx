"use client"

import { useActionState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import TombolKirim from "./TombolKirim";

export default function FormProyek({ aksi, proyek, teksTombol }) {
  const [state, formAction] = useActionState(aksi, { proyek })

  return(
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={proyek.id}/>
      <div className="space-y-2">
        <Label htmlFor="judul">Judul</Label>
        <Input id="judul" name="judul" defaultValue={state.proyek.judul} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="slug">Slug (alamat halaman detail)</Label>
        <Input id="slug" name="slug" defaultValue={state.proyek.slug} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="kategori">Kategori</Label>
          <Input id="kategori" name="kategori" defaultValue={state.proyek.kategori} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="minggu">Minggu</Label>
          <Input id="minggu" name="minggu" defaultValue={state.proyek.minggu} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="deskripsi">Deskripsi</Label>
        <Textarea id="deskripsi" name="deskripsi" defaultValue={state.proyek.deskripsi} rows={2} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fitur">Fitur</Label>
        <Textarea id="fitur" name="fitur" defaultValue={state.proyek.fitur.join("\n")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="gambar_url">Gambar URL</Label>
        <Input id="gambar_url" name="gambar_url" defaultValue={state.proyek.gambar_url} />
      </div>
      <TombolKirim teks={teksTombol} />
    </form>
  )
}