export default function Jadwal({jadwal}) {
  return(
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-utama text-white">
          <tr>
            <th className="py-2 px-4 text-start">Hari</th>
            <th className="py-2 px-4 text-start">Waktu</th>
            <th className="py-2 px-4 text-start">Kegiatan</th>
          </tr>
        </thead>
        <tbody className="text-utama bg-white">
          {jadwal.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="py-2 px-4 text-start">{item.hari}</td>
              <td className="py-2 px-4 text-start">{item.waktu}</td>
              <td className="py-2 px-4 text-start">{item.kegiatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}