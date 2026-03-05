import { dbConnect } from "@/lib/dbConnect";


export async function GET(request) {
  const res = await dbConnect("jobs")
  const jobs = await res.find().toArray()

  return Response.json(jobs)
}

export async function POST(request) {
  const data = await request.json()
  const res = await dbConnect("jobs").insertOne(data)

  if (res.acknowledged) {
    return Response.json({
      status: 200,
      message: "Job added successfully",
    })
  } else {
    return Response.json({
      status: 500,
      message: "Failed to add job",
    })
  }
}