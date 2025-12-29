"use client"
import { SessionProvider as Provider } from "next-auth/react";
type Pros = {
      children: React.ReactNode,
      session: any
}
export default function SessionProvider({children, session }: Pros){
      return <Provider session={session}>{children}</Provider>
}