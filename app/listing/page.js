'use client'
import React, { useContext, useState } from 'react'
import { useAuthStatus } from "../context/useAuthStatus";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from 'next/navigation';
const Page = () => {
    const {userCredential} = useContext(AuthContext)
  const router = useRouter()
   const {loggedIn, checkingStatus} = useAuthStatus()
   const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    if (!checkingStatus && (!userCredential || !loggedIn)) {
      router.push('/sign-in');
    }
  }, [userCredential, loggedIn, checkingStatus, router]);
  return (
    <div>page</div>
  )
}

export default Page