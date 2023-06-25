'use client'

interface ParamsDetail {
  idEmployee: String,
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
              <div className="text-2xl font-semibold mb-7">Detail Pegawai</div>
              <div className="mb-5">
                <div className="grid grid-cols-3 gap-4 text-start">
                  <div>
                    <ul className="list-none">
                      <li>Nama</li>
                      <li>NIK</li>
                      <li>NPWP</li>
                      <li>Tanggal Lahir</li>
                      <li>Alamat</li>
                      <li>Status</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <ul className="list-none">
                      <li>: Ganderton</li>
                      <li>: 12567281</li>
                      <li>: 12918738</li>
                      <li>: 25 Feb 2019</li>
                      <li>: Jakarta</li>
                      <li>: Aktif</li>
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