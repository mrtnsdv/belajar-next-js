'use client'

import { useState } from "react"
import { MdEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md"
import { MdRemoveRedEye } from "react-icons/md"

// component
import ModalDetail from "./components/ModalDetail"
import ModalAdd from "./components/ModalAdd"
import ModalEdit from "./components/ModalEdit"
import ModalDelete from "./components/ModalDelete"

const TrainingPage = () => {

  const [showModalDetail, setShowModalDetail] = useState(false)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const closeModalDetail = () => {
    setShowModalDetail(false)
  }
  const closeModalAdd = () => {
    setShowModalAdd(false)
  }
  const closeModalEdit = () => {
    setShowModalEdit(false)
  }
  const closeModalDelete = () => {
    setShowModalDelete(false)
  }

  return (
    <section className="text-black">
      <div className="mb-4 flex align-center justify-between">
        <div className="text-lg font-semibold">
          List Data Pelatihan
        </div>
        <div className="btn btn-sm bg-primary-color text-sm text-white" onClick={() => setShowModalAdd(true)}>
          Tambah Data
        </div>
      </div>
      <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Pelatihan</th>
              <th>Pengajar</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-primary-color hover:text-white">
              <th>1</th>
              <td>Javascript</td>
              <td>Masbro</td>
              <td>
                <div className="hover:cursor-pointer" onClick={() => setShowModalDetail(true)}>
                  <MdRemoveRedEye />
                </div>
              </td>
              <td>
                <div className="hover:cursor-pointer" onClick={() => setShowModalEdit(true)}>
                  <MdEdit/>
                </div>
              </td>
              <td>
                <MdDelete className="hover:cursor-pointer" onClick={() => setShowModalDelete(true)}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      <ModalDetail params={{
        idTraining: "1",
        isShowModal: showModalDetail,
        closeModal: closeModalDetail,
      }} />

      <ModalAdd params={{
        isShowModal: showModalAdd,
        closeModal: closeModalAdd
      }} />

      <ModalEdit params={{
        idTraining: "1",
        isShowModal: showModalEdit,
        closeModal: closeModalEdit
      }} />

      <ModalDelete params={{
        idTraining: "1",
        trainingName: "Javascript",
        isShowModal: showModalDelete,
        closeModal: closeModalDelete
      }} />

    </section>
  )
}

export default TrainingPage