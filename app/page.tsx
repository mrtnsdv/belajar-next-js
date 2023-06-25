'use client'
import { useEffect } from "react"
import { useRouter } from 'next/navigation'

const DefaultPage = () => {
  const router = useRouter()

  useEffect(() => {
    // check user is logged in or not
    const isLoggedIn = false
    if (isLoggedIn) {
      router.push('/employee')
    } else {
      router.push('/login')
    }
  })
  
}

export default DefaultPage