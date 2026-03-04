import { jobs } from "../../route"

export async function GET(request, { params }) {
  const { id } = await params
  const job = jobs.find((job) => job.id === Number(id)) || {}
  return Response.json(job)
}