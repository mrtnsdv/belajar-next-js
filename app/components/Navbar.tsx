'use client'

import { MdLogout } from 'react-icons/md';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const logoutUser = () => {
    router.push('/login')
  }

  return (
    <div className="navbar bg-primary-color mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 size="1.5em"/>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/employee">Pegawai <span className={pathname == "/employee" ? "ms-3 w-2 h-2 rounded-full bg-white" : ""}></span> </Link>
              </li>
              <li>
                <Link href="/training">Pelatihan <span className={pathname == "/training" ? "ms-3 w-2 h-2 rounded-full bg-white" : ""}></span></Link>
              </li>
              <li>
                <Link href="/class">Kelas <span className={pathname == "/class" ? "ms-3 w-2 h-2 rounded-full bg-white" : ""}></span></Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SMPEGAWAI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/employee" className={pathname == "/employee" ? "border-b-2 rounded-none border-white" : ""}>Pegawai</Link>
            </li>
            <li>
              <Link href="/training" className={pathname == "/training" ? "border-b-2 rounded-none border-white" : ""}>Pelatihan</Link>
            </li>
            <li>
              <Link href="/class" className={pathname == "/class" ? "border-b-2 rounded-none border-white" : ""}>Kelas</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="btn btn-sm btn-ghost text-sm" onClick={() => logoutUser()}>
            <MdLogout />
          </div>
        </div>
      </div>
  )
}

export default Navbar