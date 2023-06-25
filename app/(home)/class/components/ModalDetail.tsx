'use client'

interface ParamsDetail {
  idClass: String,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalDetail = ({params} : {params: ParamsDetail}) => {
  
  return (
    <section className={params.isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* modal start */}
            <div className="w-11/12 md:w-5/12 min-h-8/12 overflow-scroll text-black bg-white p-5 md:p-7 rounded">
              <div className="text-2xl font-semibold mb-7">Detail Kelas</div>
              <div className="mb-5">
                <div className="grid grid-cols-3 gap-4 text-start">
                  <div>
                    <ul className="list-none">
                      <li>Nama Pegawai</li>
                      <li>NIK Pegawai</li>
                      <li>Nama Pelatihan</li>
                      <li>Nama Pengajar</li>
                      <li>Tanggal Kelas</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <ul className="list-none">
                      <li>: Visko</li>
                      <li>: 16327</li>
                      <li>: Javascript</li>
                      <li>: Brodi</li>
                      <li>: 20 Juli 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="btn btn-sm" onClick={() => params.closeModal()}>Tutup</div>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
    </section>
  )
}

export default ModalDetail