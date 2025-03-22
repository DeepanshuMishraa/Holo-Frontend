'use client'

import Hero from "@/components/Hero";
import { TurnstileWidget } from "@/components/turnstile"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [verified, setVerified] = useState(false)
  const router = useRouter()

  const handleVerify = async (token: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-turnstile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      if (response.ok) {
        setVerified(true)
        router.push('/login')
      }
    } catch (error) {
      console.error('Verification failed:', error)
    }
  }

  return (
    <main className="">
      {!verified ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-muted-foreground">
              Please verify that you are human 
            </p>
            <TurnstileWidget onVerify={handleVerify} />
          </div>
        </div>
      ) : null}
      <div className={!verified ? "filter blur-sm" : ""}>
        <Hero />
      </div>
    </main>
  )
}
