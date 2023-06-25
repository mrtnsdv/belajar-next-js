'use client'

interface ParamsAdd {
  isShowModal: boolean,
  closeModal: () => void
}

const ModalAdd = ({params} : {params: ParamsAdd}) => {
  
  return (
    <section className={params.isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* modal start */}
            <div className="w-11/12 md:w-5/12 h-8/12 overflow-scroll text-black bg-white p-5 md:p-7 rounded">
              <div className="text-2xl font-semibold mb-7">Tambah Data Kelas</div>
              <form className="mb-5 text-start">
                <div className="mb-4">
                  <select className="select select-bordered w-full bg-white">
                    <option>Pilih Pegawai:</option>
                    <option>Brodi</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="mb-4">
                  <select className="select select-bordered w-full bg-white">
                    <option>Pilih Pelatihan:</option>
                    <option>Javascript</option>
                    <option>Java Spring Boot</option>
                  </select>
                </div>
              </form>
              <div className="flex justify-end">
                <div className="btn btn-sm me-2" onClick={() => params.closeModal()}>Batal</div>
                <div className="btn btn-sm bg-primary-color text-white" onClick={() => params.closeModal()}>Tambah</div>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
    </section>
  )
}

export default ModalAdd