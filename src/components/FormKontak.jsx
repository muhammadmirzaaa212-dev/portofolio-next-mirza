"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh: nama@gmail.com.";
    }
    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 min-w-lg">
      <div>
        <label htmlFor="nama" className="block font-semibold text-gray-700 dark:text-gray-300">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Contoh: Budi Santoso"
          onChange={(e) => setNama(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-300"
        />
        {error.nama && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.nama}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="nama@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-300"
        />
        {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>}
      </div>
      <div>
        <label htmlFor="nomor" className="block font-semibold text-gray-700 dark:text-gray-300">
          Nomor HP
        </label>
        <input
          type="text"
          id="nomor"
          name="nomor"
          placeholder="081234567890"
          onChange={(e) => setHp(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-300"
        />
        {error.hp && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.hp}</p>}
      </div>
      <div>
        <label htmlFor="keperluan" className="block font-semibold text-gray-700 dark:text-gray-300">
          Keperluan
        </label>
        <select 
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-300"
          onChange={(e) => setKeperluan(e.target.value)}
        >
          <option>-- Pilih keperluan --</option>
          <option>Kolaborasi</option>
          <option>Tanya Jawab</option>
          <option>Masukan dan Saran</option>
        </select>
        {error.keperluan && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.keperluan}</p>}
      </div>
      <div>
        <label htmlFor="pesan" className="block font-semibold text-gray-700 dark:text-gray-300">
          Pesan
        </label>
        <textarea
          placeholder="Tulis pesanmu disini"
          onChange={(e) => setPesan(e.target.value)}
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-300"
        />
        {error.pesan && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.pesan}</p>}
      </div>
      <div>
        <button className="px-4 py-2 rounded-lg text-white bg-aksen text-sm font-medium">Kirim Pesan</button>
      </div>
      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  )
}