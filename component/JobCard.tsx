import Link from "next/link"

interface card{
      salary: String,
      title:String,
      company: String,
      location: String,
      description: String | null,
      postedById: String,
      id: string
}

export default function JobCard(info:card){
      return (
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white max-w-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">{info.title}</h2>
              <span className="text-sm font-medium text-green-600">
                {Number(info.salary)}
              </span>
            </div>
    
            <div className="flex space-x-2 text-sm text-gray-500 mb-2">
              <span>{info.title}</span>
              <span>•</span>
              <span>{info.location}</span>
            </div>
    
            <p className="text-gray-700 text-sm line-clamp-3">
              {info.description}
            </p>
            <span>PostedById:{info.postedById} </span>
            <Link href={`/jobs/${info.id}`} className="text-blue-400">Check Job</Link>
          </div>
      )
}