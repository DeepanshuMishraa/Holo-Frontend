'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useSession } from "@/lib/auth-client"

const Hero = () => {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            The future of{" "}
            <span className="text-primary">AI chat</span>{" "}
            <span className="text-muted-foreground">is here</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience chat the way you want with holo.ai — the first open
            source AI chat app that puts your creativity and imagination first.
          </p>
          <Button onClick={() => {
            if (!session) {
              router.push("/login");
            } else {
              router.push("/dashboard");
            }
          }} className="bg-red-500 hover:bg-red-600 text-white shadow-lg dark:shadow-red-500/50">
            Get Started
          </Button>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 rounded-t-2xl overflow-hidden shadow-2xl border border-border bg-card"
        >
          <div className="flex items-center gap-2 p-2 border-b border-border bg-muted/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="relative aspect-[16/9] bg-card">
            <Image
              src="/og.png"
              alt="holo.ai"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>


      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

export default Hero
