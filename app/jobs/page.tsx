//public page ==> server side component (no useSession/ auth)
//get fetch the data from the db direct
//serverside componenet could directly targett the db but not preferred i guess
import JobCard from "@/component/JobCard";
import {prisma} from "@/lib/prisma";

export default async function Jobs() {
  //target db directly
  let jobs
  try{
       jobs = await prisma.job.findMany({
            orderBy:{postedAt:'desc'}, include:{user:true}
      })
  }catch(err){
      console.log(err)
      alert("Network error: ");
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-lg max-w-4xl mx-auto">
        {/* Job Title */}
        <input
          type="text"
          placeholder="Search jobs"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Job Type */}
        <select className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mt-4">
            {jobs?.map(job=>
                   <JobCard
                   salary={job.salary}
                   title={job.title}
                   company={job.company}
                   location={job.company}
                   description={job.description}
                   postedById={job.user.name}
                 />
            )}
        
      </div>
    </div>
  );
}
