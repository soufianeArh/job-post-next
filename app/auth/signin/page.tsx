import Image from "next/image"
export default function SignIn(){
      return (
      <div>
            <div>
                  <div>
                        <h2>welcome</h2>
                        <p>signin to post or apply for jobs</p>
                  </div>
                  <div>
                        <Image
                        src="/github.png"
                        alt="github log"
                        width={10}
                        height={10}
                        />
                        <button>
                              signin with github
                        </button>
                  </div>
            </div>
      </div>
      )
}