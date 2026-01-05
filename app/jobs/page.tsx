//public page ==> server side component (no useSession/ auth)
//get fetch the data from the db direct
//serverside componenet could directly targett the db but not preferred i guess
import JobCard from "@/component/JobCard";
import {prisma} from "@/lib/prisma";
import { redirect } from 'next/navigation'
import { FormEvent } from "react";


export default async function Jobs(
  {searchParams}:{searchParams:Promise<{[key:string]: string | string[] | undefined}>
}) {
  //target db directly
  const {q, type, location} = await searchParams;
  // const query = q as string | undefined
  
  console.log(q, type, location)
  let jobs;
  try{
    jobs = await prisma.job.findMany({
      where:{
        AND:[
          type? {type:type as string}:{},
          location? {location: location as string} : {},
          q? {OR:[
            {title:{contains:q as string,}},
            {description:{contains:q as string,}},
            {company:{contains:q as string,}}
          ]}:{}
        ]
      },
      orderBy: { postedAt: 'desc' },
      include: { user: true }
    })
  }catch(err){
      console.log(err)
      // alert("Network error: ");
  }
 console.log("found jobs ", {q, type, location}, jobs)

  return (
    <div>
       <form method="GET">
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-lg max-w-4xl mx-auto">
        {/* Job Title */}
        <input
          type="text"
          name="q"
          placeholder="Search jobs"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Job Type */}
        <select 
        name="type"
        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        <button
        type="submit"
        className="wx-full bg-indigo-600 rounded-md text-xl font-semibold text-white hover:bg-indigo-700 ">
            Search
        </button>
      </form>
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
