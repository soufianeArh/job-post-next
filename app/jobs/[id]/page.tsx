import {prisma} from "@/lib/prisma"
import Link from "next/link"

type JobType = Awaited<ReturnType<typeof prisma.job.findUnique>>;

export default async function SingleJob({
      params
    }: {
      params: Promise<{ id: string }>
    }){
      const {id} = await params;
      let job: JobType = null;
      try{
            job= await prisma.job.findUnique({
                  where: {
                        id: id as string
                  }
            })
            console.log(job)
            if(!job){
                  //redirect to notfound page 
            }
      }catch(err){
            console.log(err)
      }
      return (
            <div className="max-w-2xl rounded-lg border p-6 shadow-sm">
              <Link
                href="/jobs"
                className="mb-4 inline-block text-sm text-blue-600 hover:underline"
              >
                ← Back
              </Link>
              <h1 className="text-2xl font-semibold">{job?.title}</h1>
              <p className="mt-1 text-gray-600">{job?.company}</p>
        
              {/* 4️⃣ Location · Type · Salary */}
              <p className="mt-2 text-sm text-gray-500">
                {job?.location} · {job?.type} · {job?.salary}
              </p>
        
              {/* 5️⃣ Description */}
              <p className="mt-4 text-gray-700">
                {job?.description}
              </p>
            </div>
          );
}