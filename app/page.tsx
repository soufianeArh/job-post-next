import Image from "next/image";
import { Redirect } from "next";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await useSession();
  if(!session) //redirect to login
  return (
    <div>
      hi
    </div>
  );
}
