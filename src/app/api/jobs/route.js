import { jobs } from "../route";

export async function GET(request) {
  return Response.json(jobs)
}

export async function POST(request) {
  const data = await request.json()
  jobs.push(data)
  
  return Response.json({
    status: 200,
    message: "Job added successfully",
    data
  })
}