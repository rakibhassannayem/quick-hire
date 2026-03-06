import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export async function GET(request, { params }) {
  const { id } = await params

  if (id.length != 24) {
    return Response.json({
      message: "Invalid Job ID!",
      status: 400
    })
  }

  const jobsCollection = await dbConnect("jobs")
  const job = await jobsCollection.findOne({ _id: new ObjectId(id) })

  return Response.json(job)
}

export async function DELETE(request, { params }) {
  const { id } = await params

  if(id.length != 24){
    return Response.json({
      message: "Invalid Job ID!",
      status: 400
    })
  }

  const jobsCollection = await dbConnect("jobs")
  const result = await jobsCollection.deleteOne({_id: new ObjectId(id)})

  if(!result.acknowledged){
    return Response.json({
      message: "Failed to delete job!",
      status: 500
    })
  }

  return Response.json({
    message: "Job deleted successfully!",
    status: 200
  })
}