export default function Jadwal({jadwal}) {
  return(
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-utama text-white">
          <tr>
            <th className="py-2 px-4 md:px-6 text-start">Hari</th>
            <th className="py-2 px-4 md:px-6 text-start">Waktu</th>
            <th className="py-2 px-4 md:px-6 text-start">Kegiatan</th>
          </tr>
        </thead>
        <tbody className="text-primary bg-card">
          {jadwal.map((item) => (
            <tr key={item.id} className="border-b border-border">
              <td className="py-2 px-4 md:px-6 text-start">{item.hari}</td>
              <td className="py-2 px-4 md:px-6 text-start">{item.waktu}</td>
              <td className="py-2 px-4 md:px-6 text-start">{item.kegiatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}