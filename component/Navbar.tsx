import Link from "next/link";
import Image from "next/image"
export default function Navbar(){
      return (
            <nav className="bg-white py-3">
                  <div>
                        <div className="flex justify-between px-4">
                              <div className="flex">
                                    <Link className="flex items-center space-x-2"href={"/"}>
                                       <Image
                                         src="/logo.png"
                                         alt="Job Board logo"
                                         width={40}
                                         height={40}
                                       />
                                       <span className="font-bold">Job board</span>
                                    </Link>
                              </div>
                              <div className="flex gap-1">
                                    <div className="p-2 text-gray-600 hover:text-gray-900">
                                    <Link href={"/jobs"}>Borwse Jobs</Link>
                                    </div>
                                    <div className="p-2 text-gray-600 hover:text-gray-900">
                                    <Link href={"/jobs/post"}>Post a job</Link>
                                    </div>
                                    <div className="p-2 text-gray-600 hover:text-gray-900">
                                    <Link href={"/dashboard"}>Dashboard</Link>
                                    </div>
                                    <div className="p-2  text-gray-600 hover:text-gray-900">
                                    <Link href={"/auth/signin"}>Signin</Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </nav>
      )
}