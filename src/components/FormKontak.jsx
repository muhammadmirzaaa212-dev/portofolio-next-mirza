"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh: nama@gmail.com.";
    }
    setError(errorBaru);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 min-w-lg">
      <div>
        <label htmlFor="nama" className="block font-semibold">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Contoh: Budi Santoso"
          onChange={(e) => setNama(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2"
        />
        {error.nama && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.nama}</p>}
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
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2"
        />
        {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>}
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
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2"
        />
      </div>
      <div>
        <label htmlFor="keperluan" className="block font-semibold">
          Keperluan
        </label>
        <select className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2">
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
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2"
        />
      </div>
      <div>
        <button className="px-4 py-2 rounded-lg text-white bg-aksen text-sm font-medium">Kirim Pesan</button>
      </div>
    </form>
  )
}