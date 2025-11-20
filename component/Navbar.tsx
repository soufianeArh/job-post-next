import Link from "next/link";
import Image from "next/image"
export default function Navbar(){
      return (
            <nav>
                  <div>
                        <div className="flex justify-between">
                              <div>
                                    <Link href={"/"}>
                                       <Image
                                         src="/logo.png"
                                         alt="Job Board logo"
                                         width={40}
                                         height={40}
                                       />
                                       <span>Job board</span>
                                    </Link>
                              </div>
                              <div className="flex gap-1">
                                    <Link href={"/jobs"}>Borwse Jobs</Link>
                                    <Link href={"/jobs/post"}>Post a job</Link>
                                    <Link href={"/dashboard"}>Dashboard</Link>
                                    <Link href={"/auth/signin"}>Signin</Link>

                              </div>
                        </div>
                  </div>
            </nav>
      )
}