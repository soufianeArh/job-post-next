"use client"

import Image from "next/image"
import {githubLogin} from "@/lib/auth"
export default function SignIn(){
      return (
      <div className="flex min-h-[calc(100vh-200px)]">
            <div className="m-auto text-center  bg-white py-4 px-6">
                  <div className="mb-4">
                        <h2 className="font-bold text-xl">welcome to Joblist</h2>
                        <p className="text-gray-600">signin to post or apply for jobs</p>
                  </div>
                  <div className="flex mb-4">
                        <button onClick={githubLogin} className="w-full gap-1 flex items-center justify-center border-2 border-gray-400 rounded-md">
                        <Image
                        src="/github.png"
                        alt="github log"
                        width={15}
                        height={15}
                        />
                        <span className="text-gray-400">signin with github</span>
                        </button>
                  </div>
                  <div className="text-gray-400 text-sm">By siginin you agree to our terms </div>
            </div>
      </div>
      )
}