'use client'

interface ParamsEdit {
  idTraining: string,
  isShowModal: boolean,
  closeModal: () => void
}

const ModalEdit = ({params} : {params: ParamsEdit}) => {
  
  return (
    <section className={params.isShowModal ? "relative z-10 bg-slate-700" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* modal start */}
            <div className="w-11/12 md:w-5/12 h-8/12 overflow-scroll text-black bg-white p-5 md:p-7 rounded">
              <div className="text-2xl font-semibold mb-7">Edit Data Pelatihan</div>
              <form className="mb-5 text-start">
                <div className="mb-4">
                  <label className="block mb-1">Nama Pelatihan</label>
                  <input type="text" className="rounded w-full text-black" id="name"/>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Pengajar</label>
                  <input type="text" className="rounded w-full text-black" id="teacher"/>
                </div>
              </form>
              <div className="flex justify-end">
                <div className="btn btn-sm me-2" onClick={() => params.closeModal()}>Batal</div>
                <div className="btn btn-sm bg-primary-color text-white" onClick={() => params.closeModal()}>Edit</div>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
    </section>
  )
}

export default ModalEdit