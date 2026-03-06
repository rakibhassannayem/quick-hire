import { dbConnect } from "@/lib/dbConnect";

export async function GET(request) {
  const jobsCollection = await dbConnect("jobs")
  const jobs = await jobsCollection.find().toArray()

  return Response.json(jobs)
}

export async function POST(request) {
  const newJob = await request.json()
  newJob = {
    ...newJob,
    createdAt: new Date()
  }
  
  const jobsCollection = await dbConnect("jobs")
  const result = await jobsCollection.insertOne(newJob)

  if (!result.acknowledged) {
    return Response.json({
      status: 500,
      message: "Failed to add job",
    })
  }

  return Response.json({
    status: 200,
    message: "Job added successfully",
  })
}