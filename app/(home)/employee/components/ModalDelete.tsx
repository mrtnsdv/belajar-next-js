'use client'
import { CgDanger } from "react-icons/cg"

interface ParamsDelete {
  idEmployee: String,
  nameEmployee: String,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalDelete = ({params} : {params: ParamsDelete}) => {
  
  return (
    <section className={params.isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* modal start */}
            <div className="w-11/12 md:w-5/12 min-h-8/12 overflow-scroll text-black bg-white p-5 md:p-7 rounded">
              <div className="text-2xl font-semibold mb-7">Hapus Data Pegawai</div>
              <div className="mb-5">
                <div className='mb-4 text-4xl text-red-500 flex justify-center'>
                  <CgDanger />
                </div>
                <div>
                  Anda yakin ingin <span className="text-red-500 font-semibold">menghapus</span> data pegawai <span className="font-semibold">{ params.nameEmployee }</span> ?
                </div>
              </div>
              <div className="flex justify-center">
                <div className="btn btn-sm me-2" onClick={() => params.closeModal()}>Batal</div>
                <div className="btn btn-sm btn-error text-white" onClick={() => params.closeModal()}>Ya, Hapus</div>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
    </section>
  )
}

export default ModalDelete